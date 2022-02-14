const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    // user field added i want to know which user (admin) created whihc product.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  
    //added Reviews
    //reviews will be an array as a product can have many reviews.
    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Category',
    //   required: true
    // }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);


module.exports = Product;
