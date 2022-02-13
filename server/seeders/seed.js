const db = require('../config/connection');
const { User, Product } = require('../models');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([

    {
      _id:'1', 
     name: "Vegan Bundle", 
     description: "Vegan breakfast, lunch and dinner for 7 days.",
     image: './images/vegan.jpg',
     price: 100,
    //  quantity :100, 
     rating: 4.5,
     numReviews: 12,
     countInStock: 100

   }, 
   {
     _id: '2', 
     name: "Vegan Plus Bundle", 
     description: "Vegan breakfast, lunch and dinner for 7 days, plus snacks",
     image: './images/veganplus.jpg',
     price: 120,
    //  quantity :50,
     rating: 4,
     numReviews: 8,
     countInStock: 100
   },
   {
     _id: '3', 
     name: "Vegan Deluxe Bundle", 
     description: "Vegan breakfast, lunch and dinner for 7 days, plus snacks with specality drinks",
     image: './images/vegandeluxe.jpg',
     price: 150,
    //  quantity :20,
     rating: 4,
     numReviews: 8,
     countInStock: 110
   },
   {
     _id: '4', 
     name: "Vegetarian Bundle", 
     description: "Vegetarian breakfast, lunch and dinner for 7 days.",
     image: './images/vegetarian.jpg',
     price: 100,
    //  quantity :20, 
     rating: 4,
     numReviews: 12
   },
   {
     _id: '5', 
     name: "Vego Plus Bundle", 
     description: "Vego breakfast, lunch and dinner for 7 days, plus snacks",
     image: './images/vegetarianplus.jpg',
     price: 120,
    //  quantity :20, 
     rating: 4,
     numReviews: 12
   },
   {
     _id: '6', 
     name: "Vego Deluxe Bundle", 
     description: "Vego breakfast, lunch and dinner for 7 days, plus snacks with specality drinks",
     image: './images/vegetariandeluxe.jpg',
     price: 145,
    //  quantity :20, 
     rating: 4.5,
     numReviews: 12
   },
   {
     _id: '7', 
     name: "Classic Bundle", 
     description: "Classic breakfast, lunch and dinner for 7 days.",
     image: './images/classic.jpg',
     price: 100,
    //  quantity :20, 
     rating: 4.5,
     numReviews: 12
   },
   {
     _id: '8', 
     name: "Classic Plus Bundle", 
     description: "Classic breakfast, lunch and dinner for 7 days. plus snacks",
     image: './images/classicplus.jpg',
     price: 125,
    //  quantity :20, 
     rating: 4,
     numReviews: 12
   },
   {
     _id: '9', 
     name: "Classic Deluxe Bundle", 
     description: "Classic breakfast, lunch and dinner for 7 days. plus snacks with specality drinks",
     image: './images/classicdeluxe.jpg',
     price: 150,
    //  quantity :20, 
     rating: 4,
     numReviews: 12
   }
    
  
  ])



  // 3 x users
  // await User.deleteMany();
  // await User.create({
  //   username: "drew",
  //   address: "333 Drew Court",
  //   phone: "66664453",
  //   email: "drew@email.com",
  //   password: "password01",
  //   orders: [ 
  //   ]
  // });

  // await User.create({
  //   username: "dory",
  //   address: "45524 Dory Dribe",
  //   phone: "14449",
  //   email: "dory@email.com",
  //   password: "password01",
  //   orders: [

  //     {
  //       "products": ['1']
  //     }

  //   ]
  // })

  // await User.create({
  //   username: "elliot",
  //   address: "124 Elliot Street",
  //   phone: "13579",
  //   email: "elliot@email.com",
  //   password: "password01",
  //   orders: [
  //   ]
  // })

  console.log('users seeded');
  process.exit();
});


module.exports = products




  
  //remove CATEGORY FOR NOW 
  // await Category.deleteMany();
  // const categories = await Category.insertMany([
  //   { name: 'Vegan ', _id: 1 },
  //   { name: 'Vegan Deluxe ' },
  //   { name: 'Vegetarian' },
  //   { name: 'Classic' },
  //   { name: 'Comfort' },
  //   { name: 'Drinks' }
  // ]);
  // console.log('categories seeded')
