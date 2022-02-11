const db = require('../config/connection');
const { User, Product, Category } = require('../models');
// const userSeeds = require('./userSeeds.json');
// const productSeeds = require('./productSeeds.json')

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([{
    //  _id:_1, 
    name: "Vegan", 
    description: "Vegan breakfast, lunch and dinner for 7 days.",
    image: 'xxxx.jpg',
    price: 100,
    quantity :100 
  }, 
  {
    // _id: 2, 
    name: "Vegan Plus", 
    description: "Vegan breakfast, lunch and dinner for 7 days, plus snacks",
    image: '1xxxx.jpg',
    price: 120,
    quantity :50 
  },
  {
    // _id: 3, 
    name: "Vegan Deluxe", 
    description: "Vegan breakfast, lunch and dinner for 7 days, plus snacks with specality drinks",
    image: '2xxxx.jpg',
    price: 150,
    quantity :20 
  },
  {
    // _id: 4, 
    name: "Vego", 
    description: "Vego breakfast, lunch and dinner for 7 days.",
    image: '3xxxx.jpg',
    price: 100,
    quantity :20 
  },
  {
    // _id: 5, 
    name: "Vego Plus ", 
    description: "Vego breakfast, lunch and dinner for 7 days, plus snacks",
    image: '3xxxx.jpg',
    price: 120,
    quantity :20 
  },
  {
    // _id: 6, 
    name: "Vego Deluxe ", 
    description: "Vego breakfast, lunch and dinner for 7 days, plus snacks with specality drinks",
    image: '3xxxx.jpg',
    price: 145,
    quantity :20 
  },
  {
    // _id: 7, 
    name: "Classic", 
    description: "Classic breakfast, lunch and dinner for 7 days.",
    image: '3xxxx.jpg',
    price: 100,
    quantity :20 
  },
  {
    // _id: 8, 
    name: "Classic Plus", 
    description: "Classic breakfast, lunch and dinner for 7 days. plus snacks",
    image: '3xxxx.jpg',
    price: 125,
    quantity :20 
  },
  {
    // _id: 9, 
    name: "Classic Deluxe", 
    description: "Classic breakfast, lunch and dinner for 7 days. plus snacks with specality drinks",
    image: '3xxxx.jpg',
    price: 150,
    quantity :20 
  },
  
  ])



  //3 x users
  await User.deleteMany();
  await User.create({
    username: "drew",
    address: "333 Drew Court",
    phone: "66664453",
    email: "drew@email.com",
    password: "password01",
    orders: [ 1, 
    ]
  });

  await User.create({
    username: "dory",
    address: "45524 Dory Dribe",
    phone: "14449",
    email: "dory@email.com",
    password: "password01",
    orders: [

      {
        products: [products._id]
      }

    ]
  })

  await User.create({
    username: "elliot",
    address: "124 Elliot Street",
    phone: "13579",
    email: "elliot@email.com",
    password: "password01",
    orders: [
    ]
  })

  console.log('users seeded');
  process.exit();
});





  
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
  // console.log('categories seeded');
