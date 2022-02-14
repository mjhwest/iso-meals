const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    address: String!
    email: String!
    phone: String!
    orders: [Order] 
    isAdmin: Boolean!
  }

  type Order { 
    _id: ID
    purchaseDate: String
    products: [Product]
  }
    
  type Auth {
    token: ID!
    user: User
  }

  type Checkout{ 
    session: ID 
  }
  
  type Product {
    _id: ID!
    name: String! 
    description: String 
    image: String 
    price: String! 
    rating: Float!
    numReviews: Int 
    countInStock: Int

  }

  type Query {
    users: [User]
    user(_id: ID!):User
    products: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]): Checkout
  }
   
  type Mutation {
    addUser(username: String!, address: String!, phone: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, countInStock: Int!): Product
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    Order(_id: ID!): Order
  }
`;


module.exports = typeDefs;

    // quantity: Int - THIS WAS REMOVED FROM PRODUCT 13-2nd 
// categories: [Category] - this was removed from query. 
// products(category: ID, name: String): [Product] this was remove from query 
// category: Category - this was removed from product
// user(username: String!): User - remove from query


//THIS WAS CHANGED TO countInStock instead of quantity. 
// updateProduct(_id: ID!, quantity : Int!): Product

//REMEMBER 
// Query ; 'like a get request' it only retrives informatoin
// Mutation: Anything that changes the data in the back end. 



// NOTE: 
// orders: [Order] -----THIS IS AN ARRAY AS A USER COULD HAVE MANY ORDERS 
// products: [Product] ----- THIS IS AN ARRAY AS AN ORDER COULD HAVE MANY PRODUCTS 