import { makeStyles, createStyles } from "@material-ui/core";

const CardListStyles = makeStyles(
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "20px",
      paddingTop: "0",
      zIndex: 10,
      position: "relative",
      marginTop: "-100px",
    },
    cardList: {
      width: "100%",
      gap: "0%",
      height: "100%",
      transform: "translateZ(0)",
      flexWrap: "nowrap",
    },
    cardListItem: {
      marginRight: "10px",
      marginLeft: "10px",
      marginBottom: "50px",
    },
  })
);

export default CardListStyles;
