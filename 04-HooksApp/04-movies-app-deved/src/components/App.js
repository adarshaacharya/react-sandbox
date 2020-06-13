import React from "react";
import { MovieProvider } from "../contexts/MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";


const App = () => {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
};

export default App;
