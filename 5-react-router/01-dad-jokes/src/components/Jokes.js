import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const data = await fetch(
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/100"
    );
    const response = await data.json(); //convert to json
    setJokes(response); // set jokes to state
  };

  useEffect(() => {
    fetchJokes(); // component did mount
  }, []);



  return (
    <div>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <Link to={`/jokes/${joke.id}`}>
                {joke.setup} 
            </Link> 
          </div>
        );
      })}
    </div>
  );
};

export default Jokes;
