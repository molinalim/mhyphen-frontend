import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      user {
        ...userFields
      }
      jwt
    }
  }
  ${fragments.USER}
`;

export const EDIT_SELF = gql`
  mutation EditSelf($name: String!, $imageURI: String!) {
    editSelf(input: { name: $name, imageURI: $imageURI }) {
      ...userFields
    }
  }
  ${fragments.USER}
`;

export const ADD_MOVIE = gql`
  mutation AddMovie(
    $title: String!
    $plot: String!
    $imageURL: String!
    $runtime: Int!
    $rating: Float!
    $genre: String!
  ) {
    addMovie(
      input: {
        title: $title
        plot: $plot
        imageURL: $imageURL
        runtime: $runtime
        rating: $rating
        genre: $genre
      }
    ) {
      ...movieFields
    }
  }
  ${fragments.MOVIE}
`;

export const EDIT_MOVIE = gql`
  mutation EditMovie(
    $movieId: String!
    $title: String!
    $plot: String!
    $imageURL: String!
    $runtime: Int!
    $rating: Float!
    $genre: String!
  ) {
    editMovie(
      input: {
        movieId: $movieId
        title: $title
        plot: $plot
        imageURL: $imageURL
        runtime: $runtime
        rating: $rating
        genre: $genre
      }
    ) {
      ...movieFields
    }
  }
  ${fragments.MOVIE}
`;

export const ADD_BOOKING = gql`
  mutation AddBooking($booked: DateTime!, $movieId: ID!) {
    addBooking(input: { booked: $booked, movieId: $movieId }) {
      ...bookingFields
    }
  }
  ${fragments.BOOKING}
`;

export const EDIT_BOOKING = gql`
  mutation EditBooking($bookingId: ID!, $movieId: String) {
    editBooking(input: { bookingId: $bookingId, movieId: $movieId }) {
      ...bookingFields
    }
  }
  ${fragments.BOOKING}
`;
