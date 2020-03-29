import React, { Component } from "react";


const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}

export default class ValidationForm extends Component {
  state = initialState;

  handleChange = e => {
    const fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if(!this.state.name) {
        nameError = 'Name can not be empty'
    }

    if(!this.state.email.includes('@')) {
        emailError = 'Invalid email'
    }

    if(this.state.password.length < 5) {
        passwordError = 'Password length must be greater than 5'
    }

    if(nameError || emailError || passwordError) {
        this.setState({ nameError : nameError, emailError : emailError , passwordError : passwordError});
        return false;
    }

    return true;
  }


  onFormSubmit = e => {
    e.preventDefault();
    const isValid = this.validate()

    if(isValid) {
        console.log(this.state);

        //clear form
        this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name.."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div style={{ color: "red", fontSize: "8px" }}>
          {this.state.nameError}
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email.."
          value={this.state.email}
          onChange={this.handleChange}
        />
        <div style={{ color: "red", fontSize: "8px" }}>
          {this.state.emailError}
        </div>

        <input
          type="password"
          name="password"
          placeholder="Password.."
          value={this.state.password}
          onChange={this.handleChange}
        />
        <div style={{ color: "red", fontSize: "8px" }}>
          {this.state.passwordError}
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
