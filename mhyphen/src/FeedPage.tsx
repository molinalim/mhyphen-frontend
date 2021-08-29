import {
  makeStyles,
  createStyles,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Banner, CardList, MovieCard } from "./stories";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MOVIES } from "./api/queries";
import { Movies, Movies_movies_nodes } from "./api/__generated__/Movies";

const FeedPageStyles = makeStyles(
  createStyles({
    header: {
      position: "sticky",
    },
    page: {
      padding: "0px",
    },
  })
);

export interface FeedPageProps {
  pageTitle: string;
}

const FeedPage = ({ pageTitle }: FeedPageProps): JSX.Element => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  const { loading, error, data } = useQuery<Movies>(MOVIES, {
    fetchPolicy: "no-cache",
  });
  const styles = FeedPageStyles();

  useEffect(() => {
    if (loading) console.log("loading...");
    if (!error && !loading) {
      setCards(
        data!.movies!.nodes!.map((movie: Movies_movies_nodes) => {
          return (
            <div>
              <MovieCard
                cardTitle={movie.title}
                subHeader={movie.plot}
                cardContent={<Typography>{movie.plot}</Typography>}
                url={movie.imageURL}
                poster={movie.imageURL}
              />
            </div>
          );
        })
      );
    }
  }, [data]);

  return (
    <div className={styles.page}>
      <Banner />

      {cards.length === 0 ? (
        <CircularProgress />
      ) : (
        <CardList cards={cards} cols={window.innerWidth / 650} />
      )}
    </div>
  );
};

export default FeedPage;
