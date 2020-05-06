import React from "react";
import Person from "./Person";

const Family = (props) => {
  return (
    <div className="family">
      <p>I'm inside Family.</p>
      <Person />
    </div>
  );
};

export default Family;
