const express = require('express');
const router = express.Router();
const {
    createComic,
    updateComic,
    deleteComic,
    getComics,
    getComicById
} = require('../controllers/comicController'); // Importing all the controllers

// Route to create a new comic book
router.post('/', createComic);

// Route to edit an existing comic book by ID
router.put('/:id', updateComic);

// Route to delete a comic book by ID
router.delete('/:id', deleteComic);

// Route to get the list of comic books with optional filtering, sorting, and pagination
router.get('/', getComics);

// Route to get the details of a specific comic book by ID
router.get('/:id', getComicById);

module.exports = router;
