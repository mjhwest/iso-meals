import { gql } from '@apollo/client';

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
  cart {
   _id
   name
   description
   image
   price
   countInStock
  }
}
`

