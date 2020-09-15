import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./Banner.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-content">
        <h1 style={{ fontSize: "60px" }}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button">
          <Button
            style={{
              color: "white",
              backgroundColor: "#454545",
              opacity: "0.8",
            }}
          >
            Play
          </Button>
          <Button
            style={{
              color: "white",
              backgroundColor: "#454545",
              marginLeft: "20px",
              opacity: "0.8",
            }}
          >
            My List
          </Button>
        </div>
        <div className="banner-description">
          <h1>{movie?.overview}</h1>
        </div>
      </div>
    </div>
  );
}
export default Banner;
