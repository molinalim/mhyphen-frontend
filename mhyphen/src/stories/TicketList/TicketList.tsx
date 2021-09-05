import { ImageList, ImageListItem } from "@material-ui/core";
import TicketListStyles from "./TicketListStyles";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListSubheader from "@material-ui/core/ListSubheader";

export interface TicketListProps {
  tickets: JSX.Element[];
}

const TicketList = ({ tickets }: TicketListProps): JSX.Element => {
  const styles = TicketListStyles();
  return (
    <div className={styles.root}>
      <ImageList rowHeight={970} className={styles.ticketList}>
        {Itemize(tickets)}
      </ImageList>
    </div>
  );
};

const Itemize = (tickets: JSX.Element[]): JSX.Element[] => {
  const styles = TicketListStyles();
  const out: JSX.Element[] = [];

  tickets.forEach((ticket) => {
    out.push(
      <ImageListItem className={styles.ticketListItem}>{ticket}</ImageListItem>
    );
  });

  return out;
};

export default TicketList;
