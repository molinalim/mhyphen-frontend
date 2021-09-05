import React from "react";
import { Story, Meta } from "@storybook/react";
import Ticket, { TicketProps } from "./Ticket";

export default {
  title: "UI Components/Feed/MovieCard",
  component: Ticket,
} as Meta;

const Template: Story<TicketProps> = (args) => <Ticket {...args} />;

export const BasicCard = Template.bind(this);
BasicCard.args = {
  id: 1,
  booked: "Just now",
  created: "Just now",
  movieTitle: "Amazing World Of Gumble",
  price: "$15.00",
  qr: "https://i.pinimg.com/474x/4c/5a/4d/4c5a4dddbe33d4b3974f87ef90489a90.jpg",
};
