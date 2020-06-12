const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 8000
const dbSetup = require('./config/db')
const usersRoutes = require('./routes/users')
const path = require('path')

// Will run the code in the db.js file
dbSetup()

const app = express()

app.use(logger('dev'))

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

var Promise = require('bluebird')
Promise.promisifyAll(require('mongoose'))

app.use('/users', usersRoutes)

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})
