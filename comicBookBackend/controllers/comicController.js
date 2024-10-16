const Comic = require('../models/Comic');

// Helper function for sending error responses
const handleErrorResponse = (res, statusCode, message, error = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? error : null  // Only send detailed errors in development mode
    });
};

// Create a comic book
exports.createComic = async (req, res) => {
    try {
        const { bookName, authorName, yearOfPublication, price, numberOfPages, condition } = req.body;
        
        // Validate required fields
        if (!bookName || !authorName || !yearOfPublication || !price || !numberOfPages || !condition) {
            return handleErrorResponse(res, 400, 'Required fields are missing');
        }

        const comic = new Comic(req.body);
        await comic.save();

        res.status(201).json({
            success: true,
            message: 'Comic book created successfully',
            data: comic
        });
    } catch (err) {
        handleErrorResponse(res, 500, 'Failed to create comic', err.message);
    }
};

// Edit a comic book
exports.updateComic = async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) return handleErrorResponse(res, 404, 'Comic not found');

        const updates = req.body;
        for (const key in updates) {
            if (updates[key] !== undefined) {
                comic[key] = updates[key];
            }
        }

        await comic.save();
        res.json({
            success: true,
            message: 'Comic book updated successfully',
            data: comic
        });
    } catch (err) {
        handleErrorResponse(res, 500, 'Failed to update comic', err.message);
    }
};

// Delete a comic book
exports.deleteComic = async (req, res) => {
    try {
        const comic = await Comic.findByIdAndDelete(req.params.id);
        if (!comic) return handleErrorResponse(res, 404, 'Comic not found');
        
        res.json({
            success: true,
            message: 'Comic book deleted successfully',
            data: comic // Optionally send back deleted comic info
        });
    } catch (err) {
        handleErrorResponse(res, 500, 'Failed to delete comic', err.message);
    }
};

// Get comic book list with filtering, sorting, and pagination
exports.getComics = async (req, res) => {
    try {
        let query = Comic.find();

        // Apply filtering based on query parameters
        if (req.query.authorName) {
            query = query.where('authorName').equals(req.query.authorName);
        }
        if (req.query.condition) {
            query = query.where('condition').equals(req.query.condition);
        }
        if (req.query.yearOfPublication) {
            query = query.where('yearOfPublication').equals(req.query.yearOfPublication);
        }
        if (req.query.priceMin || req.query.priceMax) {
            const priceMin = parseFloat(req.query.priceMin) || 0;
            const priceMax = parseFloat(req.query.priceMax) || Number.MAX_VALUE;
            query = query.where('price').gte(priceMin).lte(priceMax);
        }

        // Apply sorting
        if (req.query.sort) {
            const [key, order] = req.query.sort.split(':');
            query = query.sort({ [key]: order === 'asc' ? 1 : -1 });
        }

        // Apply pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit);

        const comics = await query.exec();
        const totalComics = await Comic.countDocuments();

        res.json({
            success: true,
            message: 'Comics retrieved successfully',
            data: {
                totalComics,
                currentPage: page,
                totalPages: Math.ceil(totalComics / limit),
                comics
            }
        });
    } catch (err) {
        handleErrorResponse(res, 500, 'Failed to fetch comics', err.message);
    }
};

// Get comic book details by ID
exports.getComicById = async (req, res) => {
    try {
        const comic = await Comic.findById(req.params.id);
        if (!comic) return handleErrorResponse(res, 404, 'Comic not found');
        
        res.json({
            success: true,
            message: 'Comic book details retrieved successfully',
            data: comic
        });
    } catch (err) {
        handleErrorResponse(res, 500, 'Failed to fetch comic details', err.message);
    }
};
