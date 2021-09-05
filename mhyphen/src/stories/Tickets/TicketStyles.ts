import { createStyles, makeStyles } from "@material-ui/core";

const makeTicketStyles = makeStyles(
  createStyles({
    movieTitle: {
      alignItems: "center",
      marginRight: "0",
    },
    ticket__mobile: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      alignContent: "center",
      minWidth: "260px",
      maxWidth: "200px",
      minHeight: "200px",
      maxHeight: "1000px",
      width: "1000px",
      height: "330px",
      borderRadius: "10px",
      background: "rgba( 0, 0, 0, 0.10 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 2px )",
      border: "1px solid #00FFFF",
    },
    ticket: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      alignContent: "center",
      minWidth: "190px",
      maxWidth: "400px",
      minHeight: "400px",
      maxHeight: "1000px",
      width: "1000px",
      height: "280px",
      borderRadius: "10px",
      background: "rgba( 0, 0, 0, 0.10 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 2px )",
      border: "1px solid #00FFFF",
    },
    booking__description: {
      color: "#fff",
    },
    poster: {
      width: "100%",
      height: "100%",
    },
    description: {
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur( 15.5px )",
      background: "rgba( 255, 255, 255, 0.20 )",
      color: "black",
      fontColor: "black",
      fontWeight: 100,
      height: "100px",
    },
  })
);

export default makeTicketStyles;
