import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JokeDetail = () => {
  const params = useParams();
  const [joke, setjoke] = useState({});

  // fetch joke with /:id
  const fetchJoke = async (id) => {
    const data = await fetch(
      `https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/jokes/${id}`
    );

    const response = await data.json();
    setjoke(response);
  };

  // call joke function
  useEffect(() => {
    fetchJoke(params.id);
  }, []);

  // renderJoke
  const renderJoke = () => {
    if (!joke[0]) return <div>Loading...</div>;
    const { setup, punchline } = joke[0];
    return (
      <div>
        Q. {setup} <br />
        Ans. {punchline}
      </div>
    );
  };

  return <div>{renderJoke()}</div>;
};

export default JokeDetail;
