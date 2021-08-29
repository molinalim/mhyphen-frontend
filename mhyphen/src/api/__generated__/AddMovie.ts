/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMovie
// ====================================================

export interface AddMovie_addMovie {
  __typename: "Movie";
  id: string;
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}

export interface AddMovie {
  addMovie: AddMovie_addMovie;
}

export interface AddMovieVariables {
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}
