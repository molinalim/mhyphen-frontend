/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditMovie
// ====================================================

export interface EditMovie_editMovie {
  __typename: "Movie";
  id: string;
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}

export interface EditMovie {
  editMovie: EditMovie_editMovie;
}

export interface EditMovieVariables {
  movieId: string;
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}
