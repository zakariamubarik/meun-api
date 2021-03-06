const mongoose = require("mongoose")

const userSschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
     isAdmin: {
         type: Boolean,
         default: false
     },


}, {
    timestamps:true
});

const User = mongoose.model("User", userSschema);
module.exports=User;