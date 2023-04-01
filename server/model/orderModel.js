const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  cartItems: [
    {
      title:{type:String, require:true},
    brand:{type:String, require:true},
    category:{type:String, require:true},
    discounted_price:{type:Number, require:true},
    strike_price:{type:Number, require:true},
    discount:{type:String, require:true},
    rating:{type:Number, require:true},
    rating_count:{type:String, require:true},
    images: {type:String, require:true},
    size:{type:Array , require:true} ,
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
  }

  });

module.exports = mongoose.model("Order", orderSchema);