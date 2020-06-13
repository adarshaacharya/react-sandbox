import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    console.log(data.results);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people) {
      return <div>Can't get person in API</div>;
    }

    return (
      <div>
        {this.state.people.map((person) =>(
          <div key={person.login.uuid}>
            <div> { person.name.first } { person.name.last } </div>
            <img src={person.picture.large} alt="img" />
          </div>
        ))}
      </div>
    );
  }
}
