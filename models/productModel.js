import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, ""],
  },
  productId: {
    type: Number,
    required: [true, ""],
  },
  description: {
    type: String,
    required: [true, ""],
  },
  categories: {
    type: String,
    required: [true, ""],
  },
  stock: {
    type: Number,
    required: [true, ""],
  },
  price: {
    type: Number,
    required: [true, ""],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: string,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productModel);
