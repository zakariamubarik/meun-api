const express = require("express")
const morgan = require("morgan")
require("dotenv").config()
const connetDB = require("./config/connetDB")
const foodRoute = require("./routes/foodRoute")
const userRoute = require("./routes/userRoute");



const app = express()

connetDB()
//Middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(foodRoute)

const PORT = process.env.PORT||9000
//Home route
app.get("/", (req, res)=>{
    res.json("Welcome to my Menu API")
})




app.listen(PORT, (req, res)=>{
    console.log("server is up!!!")
})