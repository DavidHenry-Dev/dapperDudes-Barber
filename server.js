// IMPORTS
const express = require("express")
const app = express()
const methodOverride = require('method-override')

// USE ENV VARIABLES
require("dotenv").config()

// USE PORT VARIABLE FROM ENV OR DEFAULT VALUE
const PORT = process.env.PORT || 4000

// MIDDLEWARE
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use("/static", express.static("static"))
app.use(methodOverride('_method'))


// SERVER LISTENER
app.listen( PORT, ()=> console.log(`Listening on port: ${PORT}`))

// CONNECTION TEST
app.get('/test', (req, res) => {
    const data = { message: 'Hello from the server!' };
    res.json(data);
  });