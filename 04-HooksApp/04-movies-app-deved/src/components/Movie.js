import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <h3 key={movie.id}>
        {movie.name} : {movie.price}
      </h3>
    </div>
  );
};

export default Movie;
