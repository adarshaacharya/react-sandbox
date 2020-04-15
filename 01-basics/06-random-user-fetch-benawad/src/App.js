import React from "react";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
class App extends React.Component {
  state = {
    visible: true
  };

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    let slider = this.state.visible ? <ImageSlider /> : <Counter />;


    const buttonText = this.state.visible ? "Hide Image" : "Show Image";

    return (
      <div className="App">
        {slider}
        <br />
        <button onClick={this.handleVisible}>{buttonText}</button>
      </div>
    );
  }
}

export default App;
