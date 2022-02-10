const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Category {
    _id: ID
    name: String!
  }

  type Product {
    _id: ID
    name: String! 
    description: String 
    image: String 
    price: Int!
    quantity: Int
    category: Category 
  }

  type User {
    _id: ID
    username: String
    address: String 
    email: String
    phone: String 
    orders: [Order] 
  }

  type Order { 
    id_: ID
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
  
  
  type Query {
    users: [User]
    user(username: String!): User
    categories: [Category]  
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    
  }

  type Mutation {
    addUser(username: String!, addreess: String!, phone: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
  }
`;

module.exports = typeDefs;

//REMEMBER 
// Query ; 'like a get request' it only retrives informatoin
// Mutation: Anything that changes the data in the back end. 


// NOTE: 
// orders: [Order] -----THIS IS AN ARRAY AS A USER COULD HAVE MANY ORDERS 
// products: [Product] ----- THIS IS AN ARRAY AS AN ORDER COULD HAVE MANY PRODUCTS 