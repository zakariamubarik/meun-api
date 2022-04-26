const jwt = require("jsonwebtoken");
exports.genreteToken =(id)=>{
return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn:"30d"})
};
