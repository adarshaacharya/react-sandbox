import React, { useState } from "react";

// first create a context
export const MyContext = React.createContext();

// create a provider component where data lives
export const MyProvider = ({ children }) => {
  const [age, setAge] = useState(0);

  const growYearOlder = () => {
    setAge(age + 1);
  };

  return (
    <MyContext.Provider value={{ age, growYearOlder }}>
      {children}
    </MyContext.Provider>
  );
};
