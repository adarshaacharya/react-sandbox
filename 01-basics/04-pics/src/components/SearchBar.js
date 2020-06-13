import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

    // 3. value of this is equal to instance of SearchBar
    onFormSubmit = event => { 
        event.preventDefault();
        this.props.onSubmit(this.state.term);  // 4. calling onSubmit props of SearchBar component passing state as parameter
    };

    // 1. change state when user change value
    onFormChange = (e) => {
      this.setState({ term: e.target.value })
    }

  // component render
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} // 2. component re-render and assign it to value prop of input
              onChange={this.onFormChange} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
