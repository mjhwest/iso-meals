import { gql } from '@apollo/client';

// queries for user, all products, single product and cart 

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      address
      cart {
        name
        price
        description
      }
    }
  }
`;


export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      image
      price
      rating
      numReviews
      countInStock
      category
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
query product($id: ID!) {
  product(_id:$id) {
    _id
    name
    description
    image
    rating
    numReviews
    countInStock
    price
  }
}
`
export const QUERY_CART = gql`
query user {
  user {
    cart {
      _id
      name
      description
      price
      image
    }
  }
}
`