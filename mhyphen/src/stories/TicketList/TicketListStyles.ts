import { makeStyles, createStyles } from "@material-ui/core";

const TicketListStyles = makeStyles(
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "20px",
      paddingTop: "0",
      zIndex: 10,
      position: "relative",
      justifyContent: "space-around",
      overflow: "hidden",
      width: "100%",
      backgroundPosition: "fixed",
    },
    ticketList: {
      width: "100%",
      gap: "0%",
      height: "100%",
      transform: "translateZ(0)",
      flexWrap: "nowrap",
    },
    ticketListItem: {
      marginRight: "10px",
      marginLeft: "10px",
      marginBottom: "50px",
      minWidth: "280px",
    },
  })
);

export default TicketListStyles;
