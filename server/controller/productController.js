const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");
const ApiFeatures = require("../utils/apifeature");
const product=require("../db.json");

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

  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  // const products = await Product.find();
  const products = await apiFeature.query;
  res.status(200).json({ success: true,products, productsCount,resultPerPage });
});

// const insertProduct = async () => {
//     try {
//         const docs = await Product.insertMany(product);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertProduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

