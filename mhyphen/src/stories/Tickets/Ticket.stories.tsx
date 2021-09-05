import React from "react";
import { Story, Meta } from "@storybook/react";
import Ticket, { TicketProps } from "./Ticket";

export default {
  title: "UI Components/Tickets/Ticket",
  component: Ticket,
} as Meta;

const Template: Story<TicketProps> = (args) => <Ticket {...args} />;

export const BasicCard = Template.bind(this);
BasicCard.args = {
  id: 1,
  booked: "Just now",
  created: "Just now",
  movieTitle: "Amazing World Of Gumble",
  price: "15.00",
  qr: "https://assets.hongkiat.com/uploads/qr-code-artworks/ipa.jpg",
};
