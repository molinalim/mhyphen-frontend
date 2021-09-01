import { makeStyles, createStyles, CircularProgress } from "@material-ui/core";
import React from "react";
import { Banner, CardList, MovieCard } from "./stories";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MOVIES } from "./api/queries";
import { Movies, Movies_movies_nodes } from "./api/__generated__/Movies";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

const API_KEY = "c66d3d36a1ab33af191a31634a1b5a81";

//media query
function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 990,
    })
  );

  return matches;
}

const FeedPageStyles = makeStyles(
  createStyles({
    header: {
      position: "sticky",
    },
    page: {
      padding: "0px",
    },
    form__movie: {
      background: "white",
      color: "white",
      width: "200px",
      marginBottom: "40px",
      marginLeft: "30px",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3.5px )",
      borderRadius: "5px",
      paddingTop: "0px",
      padding: "10px",
    },
    form__movie__mobile: {},
    browse: {
      marginTop: "100px",
    },
    browsing__header: {
      textDecoration: "none",
      cursor: "pointer",
      outline: "none",
      border: "none",
      fontWeight: 700,
      fontSize: "50px",
      textAligh: "center",
      borderRadius: "0.2vw",
      paddingLeft: "32px",
      paddingRight: "32px",
      paddingBottom: "0px",
      marginRight: "auto",
      marginLeft: "auto",
      paddingTop: "8px",
      color: "#fff",
      textTransform: "uppercase",
      textShadow: "0 0 30px #ffffff, 0 0 10px #ffffff",
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
                title={movie.title}
                plot={movie.plot}
                rating={String(movie.rating)}
                genre={movie.genre}
                poster={movie.imageURL}
                release_date={"undefined"}
              />
            </div>
          );
        })
      );
    }
  }, [data]);
  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
  const [movies, setMovies] = React.useState<JSX.Element[]>([]);
  const [genre, setGenre] = React.useState<string>("16");
  //update genre
  const handleChange = (e: any) => {
    setGenre(e.target.value);
  };
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(
        `discover/movie?api_key=${API_KEY}&with_genres=${Number(genre)}`
      );

      setMovies(
        request.data.results.map((movie: any) => {
          return (
            <div>
              <MovieCard
                title={movie?.title}
                plot={movie?.overview}
                rating={String(movie?.vote_average)}
                genre={"undefined"}
                poster={`${base_url}${movie.poster_path}`}
                release_date={movie.release_date}
              />
            </div>
          );
        })
      );
    }
    fetchData();
  }, [`discover/movie?api_key=${API_KEY}&with_genres=${Number(genre)}`]);

  return (
    <div className={styles.page}>
      <Banner />

      {cards.length === 0 ? (
        <CircularProgress />
      ) : (
        <CardList cards={cards} cols={window.innerWidth / 230} />
      )}
      <h1 className={styles.browsing__header}>Just browsing?</h1>
      <FormControl
        className={
          JavaScriptMedia() ? styles.form__movie : styles.form__movie__mobile
        }
      >
        <InputLabel id="demo-customized-select-label">
          &nbsp;&nbsp; Browse By Genre
        </InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={genre}
          onChange={handleChange}
        >
          <MenuItem value={"27"}>Horror</MenuItem>
          <MenuItem value={"878"}>Sci-Fi</MenuItem>
          <MenuItem value={"16"}>Animation</MenuItem>
          <MenuItem value={"28"}>Action</MenuItem>
          <MenuItem value={"14"}>Fantasy</MenuItem>
          <MenuItem value={"35"}>Comedy</MenuItem>
          <MenuItem value={"10749"}>Romance</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.browse}>
        {cards.length === 0 ? (
          <CircularProgress />
        ) : (
          <CardList cards={movies} cols={window.innerWidth / 230} />
        )}
      </div>
    </div>
  );
};

export default FeedPage;
