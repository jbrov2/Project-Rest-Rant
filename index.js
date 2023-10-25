require('dotenv').config()
const express = require('express')
const app = express()


//adding jsx

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

//adding controller
app.use('/places', require('./controllers/places'))

app.get('/',(req,res) => {
    res.render('home')
})


//Wild card page make always ensure it ends up on the bottom.
app.get('*',(req,res) =>{
    res.render('error404')
})

app.listen(process.env.PORT)