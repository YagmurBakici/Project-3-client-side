import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthService from "./../auth/ajax";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    console.log("received props for user status", nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    console.log("PROP USER IN SESSION",this.props);
    // console.log(this.props.userInSession)
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink exact to="/">
            <img src="./../xpt.png" alt="logo" width="100rem" height="600rem" />
          </NavLink>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink exact to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              Contact
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {this.props.userInSession ? (
                  <React.Fragment>
                    <NavLink className="button is-primary" to="/profile">
                      Profile
                    </NavLink>

                    <button onClick={this.props.logoutFromParent}>
                      Logout
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <NavLink className="button is-primary" to="/signup">
                      Sign Up
                    </NavLink>

                    <NavLink to="/login" className="button is-light">
                      Log in
                    </NavLink>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
