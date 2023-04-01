const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
  deleteOrder,
} = require("../controller/orderController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");



const orderRoute = express.Router();

orderRoute.post("/new",requireSignIn, newOrder);
orderRoute.get("/me",requireSignIn ,myOrders);
orderRoute.get("/:id",requireSignIn, isAdmin, getSingleOrder);
orderRoute.delete("/:id",requireSignIn ,deleteOrder)
module.exports = orderRoute;

