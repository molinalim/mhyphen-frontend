import React from "react";
import { Story, Meta } from "@storybook/react";
import TicketList, { TicketListProps } from "./TicketList";
import Ticket, { TicketProps } from "../Tickets/Ticket";

export default {
  title: "UI Components/Tickets/TicketList",
  component: TicketList,
} as Meta;

const Template: Story<TicketListProps> = (args) => <TicketList {...args} />;

const makeCard = (): JSX.Element => {
  return (
    <div>
      <Ticket
        id={1}
        booked="Just now"
        created="Just now"
        movieTitle="Amazing World Of Gumble"
        price="15.00"
        qr="https://assets.hongkiat.com/uploads/qr-code-artworks/ipa.jpg"
      />
    </div>
  );
};

export const BasicCardList = Template.bind(this);
BasicCardList.args = {
  tickets: [makeCard(), makeCard(), makeCard()],
};
