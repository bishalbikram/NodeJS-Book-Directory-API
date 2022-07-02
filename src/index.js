/************************************************
 *           Server Starts From Here            *
 ************************************************/

require('dotenv').config({ path: './config/.env' })
const http = require('http')
const port = process.env.PORT
const app = require('./app')

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})