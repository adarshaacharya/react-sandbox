import React, { Component } from "react";

import MyContext from "../contexts/MyContext";

export default class Person extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name : {context.state.name}.</p>
              <p>Age : {context.state.age}.</p>
              <button onClick={context.growYearOlder}>🎂 💥 🍻</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

// alt + Z to break line




