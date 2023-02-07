// IMPORTS
const express = require("express")
const app = express()
const methodOverride = require('method-override')

import connectDB from './mongoDB/connect'

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
const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(5000, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer()

// CONNECTION TEST
app.get('localhost:5000/accountpage', (req, res) => {
    const data = { message: 'Hello from the server!' };
    res.json(data);
  });