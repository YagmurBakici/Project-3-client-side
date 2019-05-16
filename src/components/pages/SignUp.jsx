import React, { Component } from "react";
import AuthService from "./../auth/ajax";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", mail: "", password: "" };
    this.service = new AuthService();
    console.log(this.props);
    this.history = this.props.history;
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const mail = this.state.mail;
    const password = this.state.password;

    this.service
      .signup(firstName, lastName, mail, password)
      .then(res => {
        console.log(res);
        this.setState({
          firstName: "",
          lastName: "",
          mail: "",
          password: ""
        });
        this.props.getUser(res);
        console.log(this.history);
        this.history.push("/profile");
      })
      .catch(error => console.log(error));
  };

  handleInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
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
            <h1 className="sign_Title">SIGNUP PAGE</h1>
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
            <button className="auth_btn">Sign Up</button>
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
