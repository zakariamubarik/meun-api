const mongoose = require("mongoose")

const foodSschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now()
    },
    ingredients:{
        type:Array,
        required:true
    
    },
    recipe:{
        type:Array,
        required:true
    }
}, {
    timestamps:true
}
)

const Food = mongoose.model("Food", foodSschema);
module.exports=Food;