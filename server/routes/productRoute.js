const express=require("express");
const { createProduct } = require("../controller/productController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const productRoute=express.Router();

productRoute.post("/create",requireSignIn, isAdmin,createProduct)

module.exports=productRoute;