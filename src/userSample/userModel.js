const mongoose = require('mongoose')
const converter=new mongoose.Schema({
    currentCountry:{
        type:String,
        required:true
    },
    convertedCountry:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    currencyValue:{
        type:Number
        }
})
const currencyConverter=mongoose.model('converter',converter)
module.exports=currencyConverter