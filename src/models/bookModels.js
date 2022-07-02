const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        triim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    publishedDate: {
        type: Date,
        trim: true,
        required: true
    },
    isbn: {
        type: Number,
        trim: true,
        required: true
    }
})

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel