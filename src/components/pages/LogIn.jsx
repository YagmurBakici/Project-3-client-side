import React, { Component } from "react";
import AuthService from "./../auth/ajax";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./LogIn.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "susan.z.almassi@gmail.com", password: "1234567890" };
    this.service = new AuthService();
    // console.log(this.props)
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const mail = this.state.mail;
    const password = this.state.password;
    this.service
      .login(mail, password)
      .then(res => {
        this.setState({
          mail: "",
          password: ""
        });
        this.props.getUser(res); // go up to APP.js and set userIsLoggedIn
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
          <form className="form" onSubmit={this.handleSubmit}>
            <h1 className="log_Title">LOGIN</h1>
            <div className="form_field">
              <label className="label" htmlFor="">
                Email:{" "}
              </label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  name="mail"
                  type="text"
                  placeholder="email"
                  value={this.state.mail}
                  onChange={this.handleInput}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>
            <div className="form_field">
              <label className="label" htmlFor="">
                Password
              </label>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="******"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </div>
            <button className="input_send button is-link auth_btn">
              Login
            </button>
          </form>
        </div>

        <div className="outro_text">
          <p>You don't have an account ?</p>
          <Link to={"/SignUp"}>Sign up Here</Link>
        </div>
      </React.Fragment>
    );
  }
}
