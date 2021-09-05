import { makeStyles, createStyles } from "@material-ui/core";

const TicketListStyles = makeStyles(
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "0px",
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
      gap: 50,
      height: "100%",
      transform: "translateZ(0)",
      flexWrap: "nowrap",
    },
    ticketListItem: {
      marginRight: "0px",
      marginLeft: "0px",
      marginBottom: "50px",
      minWidth: "280px",
    },
  })
);

export default TicketListStyles;
