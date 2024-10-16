const express = require('express');
const mongoose = require('mongoose');
const comicRoutes = require('./routes/comicRoutes'); // Importing the routes
const connectDB = require('./Config/db'); // Importing the MongoDB connection

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Express JSON middleware to handle request bodies

// Routes
app.use('/api/comics', comicRoutes); // Register comic book routes

// Global error handling (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
