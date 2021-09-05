import React from "react";
import { Story, Meta } from "@storybook/react";
import CardList, { CardListProps } from "./CardList";
import MovieCard from "../Cards/MovieCard";

export default {
  title: "UI Components/Feed/CardList",
  component: CardList,
} as Meta;

const Template: Story<CardListProps> = (args) => <CardList {...args} />;

const makeCard = (): JSX.Element => {
  return (
    <div>
      <MovieCard
        title="MHYPHEN the Gr8"
        plot="Once upon a time..."
        genre="gr8"
        rating="1000"
        release_date="today"
        poster="https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg"
      />
    </div>
  );
};

export const BasicCardList = Template.bind(this);
BasicCardList.args = {
  cards: [makeCard(), makeCard(), makeCard()],
  cols: 6,
};
