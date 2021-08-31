import { createStyles, makeStyles } from "@material-ui/core";

const makeMCardStyles = makeStyles(
  createStyles({
    card: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      alignContent: "center",
      minWidth: "190px",
      maxWidth: "300px",
      minHeight: "200px",
      maxHeight: "700px",
      width: "1%",
      height: "300px",
      borderRadius: "17px",
      background: "rgba( 255, 255, 255, 0.10 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 11.5px )",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    poster: {
      width: "100%",
      height: "100%",
    },
    plot: {
      width: "90%",
      zIndex: 1000,
      color: "rgba(255, 255, 255, 0.54)",
    },
    wrapper: {
      width: "100%",
      minHeight: "50px",
      color: "#fff",
    },
    divider: {
      width: "90%",
      marginLeft: "5%",
    },
    header: {
      display: "flex",
    },
    description: {
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur( 2.5px )",
      background: "rgba( 255, 255, 255, 0.20 )",
    },
  })
);

export const makeDialogStyles = makeStyles(
  createStyles({
    content: {
      background: "rgba( 255, 255, 255, 0.20 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 2.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
      padding: "15px",
    },
    buttonGroup: {
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    button: {
      margin: "10px",
    },
  })
);

export default makeMCardStyles;
