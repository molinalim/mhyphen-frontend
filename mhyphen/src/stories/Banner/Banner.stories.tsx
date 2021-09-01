import React from "react";
import { Story, Meta } from "@storybook/react";
import Banner from "./Banner";

export default {
  title: "UI Components/Banner",
  component: Banner,
} as Meta;

const Template: Story = () => <Banner />;

export const BannerExample = Template.bind({});
