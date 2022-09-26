//dependencies
const express = require('express')


//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


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
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//bracgit 