const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../model/orderModel");
const ErrorHandler = require("../utils/errorhandler");
const Product=require("../model/productModel")

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const { shippingInfo, cartItems } = req.body;

  const order = await Order.create({
    shippingInfo,
    cartItems,

    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});
// {=========================get Single Order========================================}
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
  
    if (!order) {
      return next(new ErrorHandler("Order not found with this Id", 404));
    }
  
    res.status(200).json({
      success: true,
      order,
    });
  });

  // {======================get logged in user  Orders==================================}
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      orders,
    });
  });

// {========================delete Order=======================================}
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  

  res.status(200).json({
    success: true,
  });
});  
  