import React, { useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//axios stuffs
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "c66d3d36a1ab33af191a31634a1b5a81";

const requests = {
  fetchAnimations: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchSciFi: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchNicePosters: `discover/movie?api_key=${API_KEY}&with_genres=14,12,16,878`,
  fetchRaya: `/movie/527774?api_key=${API_KEY}&language=en-US`,
  fetchPikachu: `/movie/447404?api_key=${API_KEY}&language=en-US`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
};

//start of banner function
function Banner() {
  const [movie, setMovie] = React.useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchSciFi);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function cut(string: string, n: number) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {cut(String(movie?.overview), 160)}
        </h1>
        <a className="banner__button" href="/booking">
          GET YOUR TICKET NOW!
        </a>
        {useMediaQuery(
          json2mq({
            minWidth: 990,
          })
        ) ? (
          <div className="sign">
            <span className="fast-flicker">N</span>OW
            <span className="flicker">&nbsp;SHO</span>
            <span className="fast-flicker">WI</span>NG
          </div>
        ) : null}
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
