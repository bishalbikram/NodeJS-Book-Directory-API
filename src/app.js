const express = require('express')
const routes = require('./routes/index')
const bodyParser = require('body-parser')
require('./db/mongoose')

// app
const app = express()

// parse application/json 
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// Use routes
app.use('/api', routes)

module.exports = app