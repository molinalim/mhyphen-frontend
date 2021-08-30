import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = React.useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAnimations);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
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
        <div className="sign">
          <span className="fast-flicker">N</span>OW
          <span className="flicker">&nbsp;SHO</span>
          <span className="fast-flicker">WI</span>NG
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
