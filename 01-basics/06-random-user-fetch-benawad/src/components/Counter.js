import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log('Mounting...')
  }

  componentWillUnmount() {
    console.log('Unmounting...')
  }


  onClickIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  onCLickDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };


  render() {
    return (
      <div>
        <div>Count {this.state.count} </div>
        <button onClick={this.onClickIncrement}>Increment</button>
        <button onClick={this.onCLickDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
