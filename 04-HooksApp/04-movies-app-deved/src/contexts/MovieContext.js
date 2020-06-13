import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",  
      id: 2314,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2520,
    },
    {
      name: "Money Heist",
      price: "$10",
      id: 2670,
    },
  ]);

  return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};

// 1. when ever we  want to use info from this import MovieContext
// 2. MovieProvider is wrapped around around all components where we want to use the state (information)
