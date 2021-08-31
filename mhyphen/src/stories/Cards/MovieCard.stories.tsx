import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieCard, { MovieCardProps } from "./MovieCard";

export default {
  title: "UI Components/Feed/MovieCard",
  component: MovieCard,
} as Meta;

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const BasicCard = Template.bind(this);
BasicCard.args = {
  title: "MHYPHEN the Gr8",
  plot: "Once upon a time...",
  genre: "gr8",
  rating: "1000",
  poster:
    "https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg",
};
