const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const app = express()

// require() imports and middleware here ^ ///////

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/api', routes)

// app.use() middleware here ^ ///////////////////

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
