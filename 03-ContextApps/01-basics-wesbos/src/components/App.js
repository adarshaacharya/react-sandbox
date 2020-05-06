import React, { Component } from "react";
import Family from "./Family";
import { MyProvider } from "../contexts/MyContext";

export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <p>I'm inside App.</p>
        <Family/>
      </MyProvider>
    );
  }
}
