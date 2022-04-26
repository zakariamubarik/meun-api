const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodController")
const {protect, admin} =require("../middlewares/authMeddlewares")

const router = Router()
router.route("/").post(protect, admin,createFood).get(protect,getMenu)




module.exports=router