const Book = require('../models/bookModels')

bookControllers = {}

bookControllers.GetAllBook = async (req, res, next) => {
    try {
        const bookList = await Book.find({})

        res.status(200).json({
            success: true,
            bookList
        })
    } catch (error) {
        next(error)
    }
}

bookControllers.GetBook = async(req, res, next) => {
    try {
        const id = req.params.id

        const bookExist = await Book.findOne({ _id: id })
        if(!bookExist) {
            return res.status(400).json({ error: 'Book does\'t exist.' })
        }

        res.status(200).json({
            success: true,
            bookExist
        })
    } catch (error) {
        next(error)
    }
}

bookControllers.AddBook = async (req, res, next) => {
    try {
        const { title, author, description, publishedDate, isbn } = req.body

        if(!title) {
            return res.status(400).json({ error: 'You must provide title of the book.' })
        }

        if(!author) {
            return res.status(400).json({ error: 'You must provide author of the book.'})
        }

        if(!description) {
            return res.status(400).json({ error: 'You must provide description of the book.' })
        }

        if(!publishedDate) {
            return res.status(400).json({ error: 'You must provide published date of the book.' })
        }

        if(!isbn) {
            return res.status(400).json({ error: 'You must provide isbn of the book.'})
        }

        const bookExist = await Book.findOne({ isbn: isbn })
        if(bookExist) {
            return res.status(409).json({ error: 'Book already exist' })
        }

        const newBook = new Book({ title, author, description, publishedDate, isbn })

        const saveBook = await newBook.save()

        res.status(201).json({
            success: true,
            message: 'Book uploaded successfully!',
            book: saveBook
        })
    } catch (error) {
        next(error)
    }
}

bookControllers.UpdateBook = async (req, res, next) => {
    try {
        const id = req.params.id
        
        const bookExist = await Book.findOne({ _id: id })
        if(!bookExist) {
            return res.status(400).json({ error: 'Book doesn\'t exist.' })
        }

        const duplicateBook = await Book.findOne({ isbn: req.body.isbn })
        if(duplicateBook) {
            return res.status(400).json({ error: 'Book already exists.' })
        }
        
        const updatedBook = await Book.findOneAndUpdate({ _id: id }, req.body, { new: true })

        res.status(200).json({
            success: true,
            message: 'Book updated successfully!',
            book: updatedBook
        })
    } catch (error) {
        next(error)
    }
}

bookControllers.DeleteBook = async (req, res, next) => {
    try {
        const id = req.params.id
        const bookExist = await Book.findOne({ _id: id })

        if(!bookExist) {
            return res.status(400).json({ error: 'Book doesn\'t exist.' })
        }
        const deletedBook = await Book.deleteOne({ _id: id })
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully!',
            deletedBook: bookExist
        })
    } catch (error) {
        next(error)
    }
}

module.exports = bookControllers