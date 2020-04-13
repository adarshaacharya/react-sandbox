import React, { Component } from "react";

import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <div>
          Select a language :
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("english")}
          />
          <i
            className="flag nepal"
            onClick={() => this.context.onLanguageChange("nepali")}
          />
        </div>
      </div>
    );
  }
}
