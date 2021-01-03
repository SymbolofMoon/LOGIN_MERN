const express= require('express')
const morgan = require('morgan')
const bodyparser=require('body-parser')
const cors = require('cors')
// const connectDB = require('./config/db')

const app = express()

require('dotenv').config({
    path:'./config/config.env'
})

const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})
