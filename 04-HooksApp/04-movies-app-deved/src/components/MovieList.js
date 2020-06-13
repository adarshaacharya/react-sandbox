import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <div>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
