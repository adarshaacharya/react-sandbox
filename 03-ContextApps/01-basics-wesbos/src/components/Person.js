import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function Person(props) {
  const { age, growYearOlder } = useContext(MyContext);
  return (
    <>
      {age} <br />
      <button onClick={growYearOlder}>Increase age</button>
    </>
  );
}

// alt + Z to break line
