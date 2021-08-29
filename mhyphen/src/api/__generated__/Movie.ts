/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movie
// ====================================================

export interface Movie_movie {
  __typename: "Movie";
  id: string;
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}

export interface Movie {
  movie: Movie_movie;
}

export interface MovieVariables {
  id: number;
}
