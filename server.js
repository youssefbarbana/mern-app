const express=require('express')
require('dotenv').config()
const dbconnect=require('./config/connectDB')
const app=express()
//connectdb
dbconnect()
//routes
app.use(express.json())
app.use('/api/contact',require('./routes/contacts'))
const port=process.env.port
app.listen(port,(error)=>error?console.error(error):console.log('server is running'))