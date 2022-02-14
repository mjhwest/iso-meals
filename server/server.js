// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// require('dotenv').config()

// const { typeDefs, resolvers } = require('./schemas');
// const {authMiddleware} = require('./utils/auth');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   // These two lines below enable the playground when deployed to heroku. You can remove them if you don't want this functionality
//   introspection: true,
//   playground: true,
//   context: authMiddleware
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port http://localhost:${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });


//UNDO TO HERE 

//TRY THIS 
const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const router = express.Router();
const cors = require("cors");
const db = require('./config/connection');
require('dotenv').config()

//this is not needed any more (just this line) - YES IT IS 
//line below, is getting the products from the javascript file, data/products.js 
//but i want it coming from the DB 
const products = require('./data/products')


//this line below is not in previous copy 1.55pm Mon
// TRY THIS AGAIN
const productRoutes = require('./routes/productRoutes')



// const { notFound, errorHandler} = require('./middleware/errorMiddleware') - I DONT NEED THIS

// app.use(notFound)
// app.use(errorHandler)
// app.use ((req, res, next ) => {
//   const error = new Error(`Not Found - ${req.originalUrl} `)
//   res.status(404)
//   next(error)
// })
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//   res.status(statusCode)
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack, 
//   })

// })

const path = require('path');


const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const PORT = process.env.PORT || 5000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // These two lines below enable the playground when deployed to heroku. You can remove them if you don't want this functionality
  introspection: true,
  playground: true,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// THIS LOT OF CODE, NEXT 3 LINES, STOPS THE PRODUCTS FROM RENDERING>>>>>>>>>>>>>
// app.get('*', (req, res) => {                                               
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));        
// });


app.get('/', (req, res) => {
  res.send('API WORKING...')
})

//this was added / commented out 1.57pm Monday - TRY THIS AGAIN:
app.use('/api/products', productRoutes)




//THESE 2 APP.GET WERE COMMENTED OUT 14th 2nd
app.get('/api/products', (req, res) => {
  try {
    res.status(200).json({
      data: products
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }

})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})




db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});



