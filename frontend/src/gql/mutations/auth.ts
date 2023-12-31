import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authUser($email: String!, $password: String!) {
    authUser(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation registerUser($email: String!, $password: String!, $userType: UserType!) {
    registerUser(email: $email, password: $password, userType: $userType) {
      token
    }
  }
`;
