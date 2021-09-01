import React from "react";
import { Story, Meta } from "@storybook/react";

import { BookingForm, BookingFormProps } from "./BookingForm";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default {
  title: "UI Components/Booking Form",
  component: BookingForm,
} as Meta;

const mockedClient = new ApolloClient({
  uri: "https://your-graphql-endpoint",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

const Template: Story<BookingFormProps> = (args) => (
  <ApolloProvider client={mockedClient}>
    <BookingForm {...args} />
  </ApolloProvider>
);

export const Submit = Template.bind({});
Submit.args = {};
