import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
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
