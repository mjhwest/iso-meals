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
    cart: [Product]
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
    category: String

  }

  type Query {
    categories: [Category]
    users: [User]
    user:User
    products: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(product: [ID]): Checkout
  }
   
  type Mutation {
    addUser(username: String!, address: String!, phone: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, countInStock: Int!): Product
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    Order(_id: ID!): Order
    addToCart(productId: ID!): User
    removeItemFromCart(productId:ID!): User
  }
`;


module.exports = typeDefs;
