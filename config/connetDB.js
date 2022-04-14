const mongoose =require("mongoose")

const connetDB =async()=>{
    await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("database connected")
}

module.exports=connetDB;