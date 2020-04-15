import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../actions";

const App = () => {
  const counter = useSelector(state => state.counter); // use global state
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const dispatch = useDispatch(); // dispatch action function

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <br />

      <button onClick={() => dispatch(increment(5))}> Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {isLoggedIn ? <h3>Valueable Info I shouldn't see.</h3> : ""}
    </div>
  );
};

export default App;
