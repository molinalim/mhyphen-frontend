/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Bookings
// ====================================================

export interface Bookings_bookingsByUserId {
  __typename: "Booking";
  id: string;
  price: string;
  booked: any;
  created: any;
  movieId: number;
  userId: number;
}

export interface Bookings {
  bookingsByUserId: Bookings_bookingsByUserId[];
}

export interface BookingsVariables {
  userId: number;
}
