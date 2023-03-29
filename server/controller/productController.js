const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");
const ApiFeatures = require("../utils/apifeature");

// {====================Create-Product========= ADMIN  ++++=================}
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  });

  // {========================GET_ALL_PRODCUTS===================}
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const resultPerPage = 4;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  // const products = await Product.find();
  const products = await apiFeature.query;
  res.status(200).json({ success: true,products, productsCount,resultPerPage });
});

