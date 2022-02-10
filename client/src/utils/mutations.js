import { gql } from '@apollo/client';

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
    addUser(username: $username, address: $address, phone: $phone email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;