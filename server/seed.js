require('dotenv').config()

const db = require('./config/connection');
const { User, Product, Order } = require('./models');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//get the user data and putting into DB
const users = require('./data/users')

//getting the product data and putting into DB 
const products = require('./data/products')


db.once('open', async () => {


const importData = async () => {

    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()


      //import users 
     const createdUsers = await User.insertMany(users)

      //[0] as its first user from User
     const adminUser = createdUsers[0]._id

     const sampleProducts = products.map(product => {
       return { ...product, user: adminUser}
     })


     await Product.insertMany(sampleProducts)

     console.log('Data Imported')
     process.exit()
    } catch (error ) {
      console.error (`${error}`)
      process.exit(1)

    }
}

const destroyData = async () => {

  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

   console.log('Data Remooved')
   process.exit()
  } catch (error ) {
    console.error (`${error}`)
    process.exit(1)

  }
}

 if(process.argv[2] === '-d') {
   destroyData()
 } else {
   importData()
 }


})

