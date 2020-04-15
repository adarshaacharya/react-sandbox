import React from "react";

// first create a context
const MyContext = React.createContext();

// create a provider component where data lives
export class MyProvider extends React.Component {
  state = {
    name: "Wes 🔥",
    age: 100,
    cool: true,
  };

  growYearOlder = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  // return context where state is stored
  render() {
    return (
      <MyContext.Provider
        value={{ state: this.state, growYearOlder: this.growYearOlder }}
      >
        {this.props.children},
      </MyContext.Provider>
    );
  }
}

export default MyContext;
