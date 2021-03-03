import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=52d4180d753595f649f60dbbe0b91ee5`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarger"}`}
                key={movie.id}
                alt={movie.name}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
