const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const validate = require("../config/validator");
const {genreteToken }=require("../utils/generateToken");
const { use } = require("../routes/foodRoute");
const { token } = require("morgan");


const createUser = async (req,res) => {
const { username, email,password } = req.body;
const valid = await validate({ username,email,password });

if (valid) {
    const hashedPassword = await bcrypt.hash(valid.password,10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
        username: user.username,
        email: user.email,
        id: user._id,
        token:genreteToken(user._id),
            
    });
    }
    
    
   } else {
       res.status(400).json({
           messsage: "Invalid data",
       });
   }
};

async function loginUser(req, res) {
  try {
    const {email,password } = req.body
    const user = await User.findById({ email})


    if (user) {
        const isMatch= await bcrypt.compare(password,user.password)
        if (isMatch) {
            res.status(200).json({
            username: user.username,
            email: user.email,
            id: user._id,
            token: genreteToken(user._id),
           });
        } else {
            res.status(401).json({
            messsage: "invalid password",
          });
        }
    } else {
        res.status(401).json({
            messsage: "invalid email",
        });
    }
    

  } catch {
      res.status(400).json({
          messsage: "User not found"
      })
  }
}



module.exports = {
    createUser,
    loginUser,
};