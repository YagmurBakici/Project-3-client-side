import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "./../auth/ajax";
import "./Nav.css";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("received props for user status", nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    // console.log("PROP USER IN SESSION", this.props.userInSession.role);
    if (this.props.userInSession) {
      console.log("hello prop", this.props.userInSession.role);
    }
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink exact to="/">
            <img className="logo" src="./../xpt.png" alt="logo" />
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
            <NavLink exact to="/" className="navbar-items">
              HOME
            </NavLink>
            <NavLink to="/contact" className="navbar-items">
              CONTACT
            </NavLink>
            <NavLink to="/fees" className="navbar-items">
              FEES
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {this.props.userInSession ? (
                  <React.Fragment>
                    {this.props.userInSession.role === "admin" && (
                      <NavLink className="button is-primary" to="/admin">
                        Admin
                      </NavLink>
                    )}
                    {this.props.userInSession.role === "user" && (
                      <NavLink className="button is-primary" to="/profile">
                        My Profile
                      </NavLink>
                    )}

                    <button
                      className="button is-danger"
                      onClick={this.props.logoutFromParent}
                    >
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
