const express = require('express');
const router = express.Router();
const { addBook, getBooks, updateBook, deleteBook } = require('../controllers/booksController');
router.post('/add-book', addBook);
router.get('/get-books', getBooks);
router.put('/update-book/:id', updateBook);
router.delete('/delete-book/:id', deleteBook);

module.exports = router;