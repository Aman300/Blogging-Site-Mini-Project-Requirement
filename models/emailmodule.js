const mongoose = require('mongoose');
const emailSchema = new mongoose.Schema({

    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    email:{
        type: String,        
    },
    password:{
        type: String,        
    }
},{timestamps:true})

module.exports = mongoose.model("Email", emailSchema)