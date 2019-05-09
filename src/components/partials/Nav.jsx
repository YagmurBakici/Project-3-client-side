import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        <img src="./../xpt.png" alt="logo" width="150rem" />
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/SignUp">Sign Up</NavLink>
    </nav>
  );
}
