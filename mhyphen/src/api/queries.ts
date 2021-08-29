import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const MOVIES = gql`
  query Movies($first: Int, $after: String, $last: Int, $before: String) {
    movies(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        ...pageInfoFields
      }
      edges {
        cursor
      }
      nodes {
        ...movieFields
      }
    }
  }
  ${fragments.MOVIE}
  ${fragments.PAGE_INFO}
`;

export const MOVIE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      ...movieFields
    }
  }
  ${fragments.MOVIE}
`;

export const USERS = gql`
  query Users($first: Int, $after: String, $last: Int, $before: String) {
    users(first: $first, after: $after, last: $last, before: $before) {
      pageInfo {
        ...pageInfoFields
      }
      edges {
        cursor
      }
      nodes {
        ...userFields
      }
    }
  }
  ${fragments.USER}
  ${fragments.PAGE_INFO}
`;

export const USER = gql`
  query User($id: Int!) {
    user(id: $id) {
      ...userFields
    }
  }
  ${fragments.USER}
`;

export const SELF = gql`
  query Self {
    self {
      ...userFields
    }
  }
  ${fragments.USER}
`;
