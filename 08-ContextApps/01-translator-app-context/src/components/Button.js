import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default class Button extends Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "बुझाउनुहोस्";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value.language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
      </div>
    );
  }
}
