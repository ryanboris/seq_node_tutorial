// Require DB connection
const sequelize = require('./src/database/connection')
// Simple Express Framework Node Server
const express = require('express')
const app = express()
// Port to listen on
const PORT = process.env.PORT || 3000

const path = require('path')

// Custom templating engine
app.set('view engine', 'pug')

app.set('views', path.resolve('./src/views'))

// Parsing
app.use(express.json())
// Create Express Router
const router = express.Router()
app.use(router)

const rootPath = path.resolve('./dist')
app.use(express.static(rootPath))

router.use((err, req, res, next) => {
  if (err) {
    return res.send(err.message)
  }
})

app.listen(PORT, err => {
  if (err) {
    return console.log(`Cannot listen on PORT: ${PORT}`)
  }
  console.log(`>>Server is listening on: http://localhost:${PORT}`)
})
;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Local pg db has been successfully connected.')
  } catch (err) {
    console.error('The local db was not connected.', err)
  }
})()
