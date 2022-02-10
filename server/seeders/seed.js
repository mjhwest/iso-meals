const db = require('../config/connection');
const { User, Product, Category } = require('../models');
// const userSeeds = require('./userSeeds.json');
// const productSeeds = require('./productSeeds.json')

db.once('open', async () => {

  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Vegan ', _id: 1 },
    { name: 'Vegan Deluxe ' },
    { name: 'Vegetarian' },
    { name: 'Classic' },
    { name: 'Comfort' },
    { name: 'Drinks' }
  ]);
  console.log('categories seeded');


  await Product.deleteMany();

  const products = await Product.insertMany([{
    name: "Chilli Chickpeas", 
    description: "chickpeas with chilli",
    image: 'xxxx.jpg',
    category: 1,
    price: 10,
    quantity :100 
  }, 
  {
  name: "Ice Cream", 
  description: "Strawberry Icecream",
  image: 'strawberryicecream.jpg',
  // category: categories[3]._id,
  price: 9,
  quantity:100 
  }
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
