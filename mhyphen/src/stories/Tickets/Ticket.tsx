import React from "react";
import { Card } from "@material-ui/core";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import makeTicketStyles from "./TicketStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

//media query
function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 990,
    })
  );

  return matches;
}

export interface TicketProps {
  id: any;
  price: any;
  booked: any;
  created: any;
  movieTitle: any;
  qr: string;
}

const Ticket = ({
  id,
  price,
  booked,
  created,
  movieTitle,
  qr,
}: TicketProps): JSX.Element => {
  const styles = makeTicketStyles();

  return (
    <div>
      <Card
        className={JavaScriptMedia() ? styles.ticket : styles.ticket__mobile}
        variant={"outlined"}
      >
        <img className={styles.poster} src={qr} alt={id} />
        <ImageListItemBar
          className={styles.description}
          title={<h2 className={styles.booking__description}>{movieTitle}</h2>}
          subtitle={
            <div className={styles.booking__description}>
              <strong>Time: {new Date(booked).toLocaleString()}</strong>
              <br></br>
              <strong>Price: ${price}</strong>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default Ticket;
