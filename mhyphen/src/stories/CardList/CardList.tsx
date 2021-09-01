import { ImageList, ImageListItem } from "@material-ui/core";
import CardListStyles from "./CardListStyles";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface CardListProps {
  cards: JSX.Element[];
  cols: number;
}

const CardList = ({ cards, cols }: CardListProps): JSX.Element => {
  const styles = CardListStyles();
  return (
    <div className={styles.root}>
      {useMediaQuery(
        json2mq({
          minWidth: 990,
        })
      ) ? (
        <ImageList className={styles.cardList} cols={cols} rowHeight={"auto"}>
          {Itemize(cards)}
        </ImageList>
      ) : (
        <ImageList className={styles.cardList} cols={cols} rowHeight={"auto"}>
          {Itemize(cards)}
        </ImageList>
      )}
    </div>
  );
};

const Itemize = (cards: JSX.Element[]): JSX.Element[] => {
  const styles = CardListStyles();
  const out: JSX.Element[] = [];

  cards.forEach((card) => {
    out.push(
      <ImageListItem className={styles.cardListItem}>{card}</ImageListItem>
    );
  });

  return out;
};

export default CardList;
