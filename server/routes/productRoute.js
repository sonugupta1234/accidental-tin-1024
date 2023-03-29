const express=require("express");
const { createProduct, getAllProducts } = require("../controller/productController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const productRoute=express.Router();

productRoute.post("/create",requireSignIn, isAdmin,createProduct)

productRoute.get("/getproducts",getAllProducts)

module.exports=productRoute;