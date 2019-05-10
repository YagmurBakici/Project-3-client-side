import React, { Component } from "react";
// import AuthService from "./../auth/ajax";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    mail: "",
    password: ""
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  };

  handleInput = evt => {
    evt.preventDefault();
    console.log(evt);
  };

  render() {
    return (
      <React.Fragment>
        <h1>SIGNUP PAGE</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            className="input"
            name="firstName"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className="input"
            name="lastName"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="mail">
            Email
          </label>
          <input
            type="text"
            className="input"
            name="mail"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            className="input"
            name="password"
            onChange={this.handleInput}
          />

          <button className="btn">Ok</button>
        </form>
      </React.Fragment>
    );
  }
}
