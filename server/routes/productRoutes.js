const express = require('express')
const Product = require('../models/Product')
const asyncHandler = require('express-async-handler')
const router = express.Router()

// FETCH ALL PRODUCTS
// GET /api/products
//public route
router.get('/products', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    console.log(products)
        res.json(products)
        

    // try {
    //   res.status(200).json({
    //     data: products
    //   });
    // } catch (err) {
    //   res.status(400).json({
    //     message: "Some error occured",
    //     err
    //   });
    // }
  
  }))
  
  // FETCH  PRODUCT by ID
  // GET /api/products/:id
  //public route
  router.get('/products/:id', asyncHandler(async (req, res) => {

    //this should give me the ID in the URL but its not. its coming up as undefined, and there is NO id, in the postman route. 
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)

    } else {
        res.status(404).json({ message: 'Product not found'})
    }
  }
  
  ))
  

module.exports =  router