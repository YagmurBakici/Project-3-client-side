import React, { Component } from "react";
import AuthService from "./../auth/ajax";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mail: "",
      password: "",
      nbAdults: 0,
      nbChildren: 0
    };
    this.service = new AuthService();
    console.log(this.props);
    this.history = this.props.history;
  }

  componentDidMount() {
    const possibleKeys = [
      "userInfos",
      "housingInfos",
      "schoolInfos",
      "bankInfos",
      "insuranceInfos",
      "communicationInfos"
    ];
    const services = {};

    possibleKeys.forEach(key => {
      var check = window.localStorage.getItem(key);
      if (check) {
        services[key] = JSON.parse(check);
      }
    });

    this.setState({ services: services }, () => {
      console.log("previous infos in localstorage", this.state);
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    // return console.log(this.state);
    this.service
      .signup(this.state)
      .then(res => {
        console.log(res);
        this.props.getUser(res);
        this.history.push("/profile");
      })
      .catch(error => console.log(error));
  };

  handleInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form_Container">
          <form className="form " onSubmit={this.handleSubmit}>
            <h1 className="sign_Title">SIGN UP</h1>
            <p className="intro_text">It will be quick</p>
            <div className="form_field">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                className="input"
                name="firstName"
                placeholder="firstname"
                onChange={this.handleInput}
              />
            </div>

            <div className="form_field">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                name="lastName"
                placeholder="lastname"
                onChange={this.handleInput}
              />
            </div>

            <div className="form_field">
              <label className="label" htmlFor="mail">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="mail"
                placeholder="email"
                onChange={this.handleInput}
              />
            </div>

            <div className="form_field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="******"
                onChange={this.handleInput}
              />
            </div>
            <button className="input_send button is-link auth_btn">
              Sign Up
            </button>
          </form>
        </div>

        <div className="outro_text">
          <p>Already have an account ?</p>
          <Link to={"/LogIn"}>Login here</Link>
        </div>
      </React.Fragment>
    );
  }
}
