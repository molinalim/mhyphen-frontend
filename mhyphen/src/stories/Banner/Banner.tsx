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

//start of banner function
function Banner() {
  const backdrop_path = [
    "https://www.themoviedb.org/t/p/original/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
    "https://www.themoviedb.org/t/p/original/e4qwJdxWkNU49y6YyYyN60Gimdi.jpg",
    "https://www.themoviedb.org/t/p/original/yXybBEC45p84D0Ky7GmQQYrclVr.jpg",
    "https://www.themoviedb.org/t/p/original/i62oJ7p89sPvhf9gNkuDQVSlj2G.jpg",
    "https://www.themoviedb.org/t/p/original/xIbSSyPYgCfyljRWGsmAJqHLYnY.jpg",
    "https://www.themoviedb.org/t/p/original/u4XvyFvMtFZOWUcA0GmlWP6rMxC.jpg",
  ];
  const [movie, setMovie] = React.useState<any>();
  const bg =
    backdrop_path[Math.floor(Math.random() * backdrop_path.length - 1)];
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(
        `/movie/447404?api_key=${API_KEY}&language=en-US`
      );
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${bg}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title}</h1>
        <h1 className="banner__description">{String(movie?.overview)}</h1>
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
