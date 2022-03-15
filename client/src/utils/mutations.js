import { gql } from '@apollo/client';

// mutations for login user, add user, add to cart and remove from cart . 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $address: String!, $phone: String!, $email: String!, $password: String!) {
    addUser(username: $username, address: $address, phone: $phone, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TO_CART=gql`
mutation addToCart ($productId: ID!){
  addToCart(productId: $productId) {
    username
    cart {
      name
      price
      description
    }
  }
}`

export const REMOVE_FROM_CART=gql`
mutation removeItemFromCart ($productId: ID!){
  removeItemFromCart(productId: $productId) {
    username 
    cart {
      name
      price
      description
    }
  }
}


`

