const express = require('express')
const router = express.Router()

// All route of Book
const bookRoutes = require('./api/bookRoutes')
router.use('/book', bookRoutes)

module.exports = router