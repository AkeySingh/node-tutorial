const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const productRoute = require('./routes/product')
const userRoute = require('./routes/user')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})
app.use('/product', productRoute)
app.use('/user', userRoute)



mongoose.set("strictQuery", false)
mongoose.
    connect('mongodb+srv://akey9009:9009@cluster0.sndtcpm.mongodb.net/')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
