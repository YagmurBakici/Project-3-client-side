import React, { Component } from "react";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default class InitalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      nbChildren: 0,
      targetCity: ""
    };
    console.log(history);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const userInfosAsJSON = JSON.stringify(this.state);
    console.log(userInfosAsJSON);
    window.localStorage.setItem("userInfos", userInfosAsJSON);
    history.push("/step2");
    // stocker dans le localStorage au fur et à mesure
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="title">Step 1</h1>
        <label htmlFor="name" className="label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          onChange={this.handleChange}
        />
        <label htmlFor="lastname" className="label">
          lastname
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="input"
          onChange={this.handleChange}
        />
        <label htmlFor="nbChildren" className="label">
          How many Children ?
        </label>
        <input
          type="number"
          min="0"
          id="nbChildren"
          name="nbChildren"
          className="input"
          value={this.state.nbChildren}
          onChange={this.handleChange}
        />
        <label htmlFor="targetCity" className="label">
          where are you moving ?
        </label>
        <input
          type="text"
          id="targetCity"
          name="targetCity"
          className="input"
          onChange={this.handleChange}
        />
        <button className="btn">ok</button>
      </form>
    );
  }
}
