import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    favPet: "",
    rememberMe: true,
    salutation: "Miss."
  };

  handleChange = (event) => {
      const isCheckbox = event.target.type === 'checkbox' ? true : false
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value //updating value of fieldname not statename
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange} // event, statename
        />

        <textarea
          name="favPet"
          value={this.state.favPet}
          onChange={this.handleChange}
        ></textarea>

        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />

        <div>
          <select
            name="salutation"
            value={this.state.salutation}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss.</option>
            <option>Ms.</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
