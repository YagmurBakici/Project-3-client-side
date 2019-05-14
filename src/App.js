import React, { Component } from "react";
import "react-bulma-components";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import AllServices from "./components/pages/AllServices";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allservices" component={AllServices} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}
