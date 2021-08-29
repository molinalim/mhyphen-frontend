import { gql } from "@apollo/client";

export const USER = gql`
  fragment userFields on User {
    id
    name
    gitHub
    imageURI
  }
`;

export const MOVIE = gql`
  fragment movieFields on Movie {
    id
    title
    plot
    imageURL
    runtime
    rating
    genre
  }
`;

export const BOOKING = gql`
  fragment bookingFields on Booking {
    id
    price
    booked
    created
    movieId
    userId
  }
`;

export const PAGE_INFO = gql`
  fragment pageInfoFields on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`;
