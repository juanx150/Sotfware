const mongoose = require('mongoose')
const userSchema =mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    pets:{
        type:Object,
        required:true
    },
    name_pet:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('user',userSchema)