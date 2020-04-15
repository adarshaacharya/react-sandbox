import React, { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((previousMovies) => [...previousMovies, { name, price }]);
  };
  return (
    <form onSubmit={addMovie}>
      Name :
      <input type="text" name="name" value={name} onChange={updateName} />
      Price:
      <input type="number" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
