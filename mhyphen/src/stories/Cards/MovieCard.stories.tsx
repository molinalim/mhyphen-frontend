import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieCard, { MovieCardProps } from "./MovieCard";
import { Typography } from "@material-ui/core";

export default {
  title: "UI Components/Feed/MovieCard",
  component: MovieCard,
} as Meta;

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const BasicCard = Template.bind(this);
BasicCard.args = {
  cardTitle: "Project Lorem Ipsum",
  subHeader: "Rodger Gu",
  cardContent: <Typography>some content</Typography>,
  url: "https://github.com/NZMSA",
  poster:
    "https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg",
};
