import { makeStyles, createStyles } from "@material-ui/core";

const SectionHeaderStyles = makeStyles(
  createStyles({
    wrapper: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      alignContent: "center",
      paddingBottom: "5px",
      paddingLeft: "0px",
      marginTop: "-250px",
    },
    divider: {
      width: "100%",
    },
    title: {
      borderRadius: "0px 25px 25px 0px",
      background: "rgba(51, 51, 51, 0.5)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      color: "#fff",
      width: "max-content",
      padding: "10px",
      paddingRight: "20px",
      fontSize: "120%",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      textShadow: "1px 1px #000",
    },
    button: {},
  })
);

export default SectionHeaderStyles;
