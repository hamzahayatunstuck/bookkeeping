const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    // coverImage:{
    //     type: String,
    //     required: true,
    // },
    quantity:{
        type: Number,
        required: true,
    }

})


const BooksModel = mongoose.model("Book", BooksSchema);

module.exports = BooksModel;