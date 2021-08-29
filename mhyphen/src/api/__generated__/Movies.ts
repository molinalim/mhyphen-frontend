/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export interface Movies_movies_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Movies_movies_edges {
  __typename: "MovieEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface Movies_movies_nodes {
  __typename: "Movie";
  id: string;
  title: string;
  plot: string;
  imageURL: string;
  runtime: number;
  rating: number;
  genre: string;
}

export interface Movies_movies {
  __typename: "MovieConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Movies_movies_pageInfo;
  /**
   * A list of edges.
   */
  edges: Movies_movies_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: Movies_movies_nodes[] | null;
}

export interface Movies {
  movies: Movies_movies | null;
}

export interface MoviesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
