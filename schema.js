const mongoose = require('mongoose') //importing mongoose


//item detail Schema
const itemDetails = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})


//Restaurant Details Schema
const restaurantDetails = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    items : [itemDetails]
})

const restaurantModel = mongoose.model('Restaurant',restaurantDetails); //creating a model
module.exports = restaurantModel //exporting the restaurant model