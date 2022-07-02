const express = require('express')
const router = express.Router()
const bookControllers = require('../../controllers/bookControllers')

/**
 * @route GET api/book
 * @description Get all book route
 * @access Public
 */
router.get('/', bookControllers.GetAllBook)

/**
 * @route GET api/book/:id
 * @description Get book by id route
 * @access Public
 */
router.get('/:id', bookControllers.GetBook)

/**
 * @route POST api/book/add
 * @description Add book route
 * @access Public
 */
router.post('/add', bookControllers.AddBook)

/**
 * @route PUT api/book/update/:id
 * @description Update book by id route
 * @access Public
 */
router.put('/update/:id', bookControllers.UpdateBook)

/**
 * @route DELETE api/book/delete/:id
 * @description Delete book by id route
 * @access Public
 */
router.delete('/delete/:id', bookControllers.DeleteBook)

module.exports = router