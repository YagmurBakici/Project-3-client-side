import React, { Component } from "react";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    );
  }
}
