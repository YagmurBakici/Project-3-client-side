import React, { Component } from "react";

export default class SignUp extends Component {
  state= {
    firstName: "",
    LastName: "",
    mail: "",
    password:""
  }

  render() {
    return (
      <React.Fragment>
        <h1>SIGNUP PAGE</h1>
        <form action="">
          <label htmlFor="first_name">First Name</label>
          <input type="text"/>

          <label htmlFor="last_name">Last Name</label>
          <input type="text"/>
          <label htmlFor="mail">Mail</label>
          <input type="text"/>
          <label htmlFor="password">your Password</label>
          <input type="text"/>

        </form>
      </React.Fragment>
    );
  }
}
