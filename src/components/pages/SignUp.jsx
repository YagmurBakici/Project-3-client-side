import React, { Component } from "react";
<<<<<<< HEAD
// import AuthService from "./../auth/ajax";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    mail: "",
    password: ""
  };
=======
import AuthService from "./../auth/ajax";
import {Link} from "react-router-dom";

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {firstName:"",lastName:"",mail:"",password:""};
    this.service = new AuthService()
  }
>>>>>>> 627871696594386b5805fe5b04a8b4d217e8f3d7

  handleSubmit = evt => {
    evt.preventDefault();
<<<<<<< HEAD
    console.log(evt);
  };

  handleInput = evt => {
    evt.preventDefault();
    console.log(evt);
  };
=======
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const mail = this.state.mail;
    const password = this.state.password;
  
    this.service.signup(firstName,lastName,mail, password)
    .then( res => {
      console.log(res)
        this.setState({
            firstName: "", 
            lastName:"",
            mail:"",
            password: ""
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleInput = (evt) => {  
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

>>>>>>> 627871696594386b5805fe5b04a8b4d217e8f3d7

  render() {
    return (
      <React.Fragment>
        <h1>SIGNUP PAGE</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            className="input"
            name="firstName"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className="input"
            name="lastName"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="mail">
            Email
          </label>
          <input
            type="text"
            className="input"
            name="mail"
            onChange={this.handleInput}
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            className="input"
            name="password"
            onChange={this.handleInput}
          />

          <button className="btn">Ok</button>
        </form>

        <p>Already have an account ?</p>
        <Link to={"/LogIn"}>Login</Link>
      </React.Fragment>
    );
  }
}
