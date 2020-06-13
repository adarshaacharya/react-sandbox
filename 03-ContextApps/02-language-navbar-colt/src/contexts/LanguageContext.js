import React, { createContext, useState } from "react";
export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("nepali");

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  // passing as obj
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
