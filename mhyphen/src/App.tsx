import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";

import { Header } from "./stories/Header/Header";
import { Footer } from "./stories/Footer/Footer";
import { BookingForm } from "./stories/BookingForm/BookingForm";
import FeedPage from "./FeedPage";
import { useQuery } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

function App() {
  const { loading, error, data } = useQuery<Self>(SELF);
  const matches = useMediaQuery(
    json2mq({
      minWidth: 700,
    })
  );
  return (
    <div className="App">
      <Header user={data?.self} />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/home"
          render={() => <FeedPage pageTitle="Now Showing" />}
        />
        <Route path="/booking">
          <div
            className={matches ? "booking__ticket" : "booking__ticket__mobile"}
          >
            <BookingForm />
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
