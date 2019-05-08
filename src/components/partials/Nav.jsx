import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink exact to="/home">
        <img src="./../xpt.png" alt="logo" width="150rem" />
      </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </nav>
  );
}
