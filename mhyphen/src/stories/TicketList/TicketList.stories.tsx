import React from "react";
import { Story, Meta } from "@storybook/react";
import TicketList, { TicketListProps } from "./TicketList";
import { Card, CardContent, CardHeader, Divider } from "@material-ui/core";

export default {
  title: "UI Components/Feed/TicketList",
  component: TicketList,
} as Meta;

const Template: Story<TicketListProps> = (args) => <TicketList {...args} />;

const makeCard = (): JSX.Element => {
  return (
    <div>
      <Card variant="outlined">
        <CardHeader title={"Some Header"}></CardHeader>
        <Divider />
        <CardContent>Lorem Ipsum Dolor Est Et Cetera Et Cetera</CardContent>
      </Card>
      <Card variant="outlined">
        <CardHeader title={"Some Header1"}></CardHeader>
        <Divider />
        <CardContent>Lorem Ipsum Dolor Est Et Cetera Et Cetera</CardContent>
      </Card>
    </div>
  );
};

export const BasicCardList = Template.bind(this);
BasicCardList.args = {
  tickets: [makeCard(), makeCard(), makeCard()],
};
