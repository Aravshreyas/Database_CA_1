const express = require('express') // importing express
const app = express() // storing express in app
const mongoose = require('mongoose') // importing mongoose
const Restaurant = require('./schema') // importing Restaurant model or Schema
const PORT = 8000 // defining the PORT

// mongoDB Connection
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://aravshreyass70:Kalvium@kalvium.w4qkw.mongodb.net/Database_CA_1?retryWrites=true&w=majority&appName=Kalvium")
        console.log("Database Connection Successful")

    }catch(error){
        console.log("Database Connection Failed")
        console.log("Error",error)
    }
}

connectDB() //connect to Database

// adding a message for the / endpoint
app.get('/',(req,res)=>{
    res.json({message : 'Thank you for visiting , Check the schema.js file for the CA 1s task'})
})

app.listen(PORT,()=>console.log(`Server is running in PORT ${PORT}`)) //creating a server