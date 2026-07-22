const BookModel = require('../models/BooksModel');
const addBook = async(req, res) => {
    try {
        const {title, author, category, quantity} = req.body;
        const books = await BookModel.find({title, author})
        if(books.length > 0){
            return res.status(400).json({message: 'Book already exists'});
        }
        const book = await BookModel.create({title, author, category, quantity});
        res.status(201).json({message: 'Book added successfully', book});
    }catch(error){
        console.log(error); 
        res.status(500).json({message: error.message});
    }
}

const getBooks = async(req, res) => {
    try {
        const books = await BookModel.find();
        res.status(200).json({books});
    }catch(error){
        console.log(error); 
        res.status(500).json({message: error.message});
    }
}

const updateBook = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, author, description, category} = req.body;
        const book = await BookModel.findByIdAndUpdate(id, {title, author, description, category}, {new: true});
        res.status(200).json({message: 'Book updated successfully', book});
    }catch(error){
        console.log(error); 
        res.status(500).json({message: error.message});
    }
}

const deleteBook = async(req, res) => {
    try {
        const {id} = req.params;
        const book = await BookModel.findByIdAndDelete(id);
        res.status(200).json({message: 'Book deleted successfully', book});
    }catch(error){
        console.log(error); 
        res.status(500).json({message: error.message});
    }
}

module.exports = { addBook, getBooks, updateBook, deleteBook };