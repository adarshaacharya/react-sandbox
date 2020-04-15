import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Joke from "./Jokes";
import JokeDetail from "./JokeDetail";
import About from "./About";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/jokes" exact component= {Joke} />
        <Route path="/jokes/:id" component= {JokeDetail}  />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
