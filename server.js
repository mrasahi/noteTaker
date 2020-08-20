// Brings in express and path
const express = require('express')
const app = express()
const path = require('path')


// middleware

// Use public folder that has html files as default
app.use(express.static(path.join(__dirname, 'public')))
// Reads json info correctly as strings or arrays
app.use(express.urlencoded({ extended: true }))
// Makes requests able to read json objects correctly
app.use(express.json())

// Brings in all paths required from the routes folder
app.use(require('./routes'))


// Stars server with heroku, or local 3000
app.listen(process.env.PORT ||3000)