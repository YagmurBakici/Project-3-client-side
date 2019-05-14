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
    console.log("iciiiiii", nextProps);
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  // logoutUser = () => {
  //   this.service.logout()
  //     .then(()=>{
  //       this.setState({ loggedInUser: null  });
  //       // this.props.getUser(null)
  //     })
  // }

  render() {
    ////////////////////////////////////////////////
    /////////////IF LOGGED IN///////////////////////
    ////////////////////////////////////////////////
    if (this.state.loggedInUser) {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink exact to="/">
              <img
                src="./../xpt.png"
                alt="logo"
                width="100rem"
                height="600rem"
              />
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
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink className="button is-primary" to="/Profile">
                    Profile
                  </NavLink>

                  <Link to="/" className="button is-light">
                    <button onClick={this.props.logoutFromParent}>
                      Logout
                    </button>
                    {/* <button onClick={()=> this.logoutUser()}>Logout</button> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );

      ////////////////////////////////////////////////
      /////////////IF NOT LOGGED//////////////////////
      ////////////////////////////////////////////////
    } else {
      return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink exact to="/">
              <img
                src="./../xpt.png"
                alt="logo"
                width="100rem"
                height="600rem"
              />
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
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
              <NavLink to="/Profile" className="navbar-item">
                Profile
              </NavLink>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink className="button is-primary" to="/SignUp">
                    Sign Up
                  </NavLink>

                  <NavLink to="/login" className="button is-light">
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
}
