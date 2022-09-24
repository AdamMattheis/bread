//dependencies
const express = require('express')


//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()



//routes
app.get('/', (req,res) => {
    res.send('Welcome to my Bread App!')
})

//breads
const breadsController = require('./controllers/bread_controller.js')
app.use('/breads', breadsController)

//listen
app.listen(PORT, () => {
    console.log('listening to port', PORT);
})

//bracgit 