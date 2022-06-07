const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const authorSchema = new mongoose.Schema({

    title:{
        type: String,        
    },
    img:{
        type: String,        
    },
    content:{
        type: String,        
    },
    signature:{
        type: String,
    },

    userId: {
        type:ObjectId, 
        ref:'Email',
    },

    isDeleted: {
        type: Boolean, default: false
      },

      deletedAt: {
        type: String, default: null
      },
      createdAt: {
        type: String, default: null
      },
},{timestamps:true})

module.exports = mongoose.model("Blog", authorSchema)