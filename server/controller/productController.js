const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");

// {====================Create-Product========= ADMIN  ++++=================}
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  });