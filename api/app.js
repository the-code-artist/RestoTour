const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')
const app=express();
const restaurantRoute=require('./routes/restaurants')
const cors=require("cors")

app.use(cors())
app.use("*",cors()) 
app.use("/api/restaurants",restaurantRoute)
//connect to db 
mongoose.connect(process.env.url)
.then(()=>{
    console.log("connected to db")
})
.catch(()=>{
    console.log("unable to connect to db")
})
//listen to server
app.listen(5000,()=>{
    console.log("listening")
})
