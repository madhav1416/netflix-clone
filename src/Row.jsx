import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, poster }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    async function fetchData() {
      const requests = await instance.get(fetchUrl);
      setMovie(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  console.info(movie);
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailer) setTrailer("");
    else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2 style={{ color: "white", marginLeft: "15px" }}>{title}</h2>
      <div className="row-detail">
        {movie.map((movies) => (
          <img
            key={movies.id}
            onClick={() => handleClick(movies)}
            className={poster ? "row-poster" : "row-thumbnail"}
            src={`${baseUrl}${
              poster ? movies?.poster_path : movies?.backdrop_path
            }`}
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  );
}
export default Row;
