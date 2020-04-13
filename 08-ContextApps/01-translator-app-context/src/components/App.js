import React, { Component } from "react";

import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default class App extends Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
            <ColorContext.Provider value={"red"}>
              <UserCreate />
            </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
