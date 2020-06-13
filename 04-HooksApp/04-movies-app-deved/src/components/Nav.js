import React, { useContext } from "react";

import { MovieContext } from "../contexts/MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
       No of Movies :  {movies.length}
    </div>
  );
};

export default Nav;
