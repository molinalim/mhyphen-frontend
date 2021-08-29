/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBooking
// ====================================================

export interface AddBooking_addBooking {
  __typename: "Booking";
  id: string;
  price: string;
  booked: any;
  created: any;
  movieId: number;
  userId: number;
}

export interface AddBooking {
  addBooking: AddBooking_addBooking;
}

export interface AddBookingVariables {
  booked: any;
  movieId: string;
}
