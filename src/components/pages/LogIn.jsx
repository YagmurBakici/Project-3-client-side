import React, { Component } from "react";

export default class LogIn extends Component {

  state = {
    email: "",
    password: ""
  }

  handleInput = (evt) => {
    // console.log(evt.target.name, evt.target.value)
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOG IN PAGE</h1>
        <input name="email" onChange={this.handleInput} />
        <input name="password" onChange={this.handleInput} />
        <button>ok</button>
      </form>
    );
  }
}
