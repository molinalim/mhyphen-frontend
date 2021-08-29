/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditBooking
// ====================================================

export interface EditBooking_editBooking {
  __typename: "Booking";
  id: string;
  price: string;
  booked: any;
  created: any;
  movieId: number;
  userId: number;
}

export interface EditBooking {
  editBooking: EditBooking_editBooking;
}

export interface EditBookingVariables {
  bookingId: string;
  movieId?: string | null;
}
