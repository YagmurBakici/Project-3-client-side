import React, { Component } from "react";
import AuthService from "./../auth/ajax";
import {Link} from "react-router-dom";


export default class LogIn extends Component {
  constructor(props){
    super(props);
    this.state= {mail:"thanh.ngu94@gmail.com",password:"1234567890"}
    this.service = new AuthService();
    // console.log(this.props)
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    const mail = this.state.mail;
    const password = this.state.password;
    this.service.login(mail,password)
      .then( res =>{
        this.setState({  
         mail:"",
         password:""
        });
        this.props.getUser(res); // go up to APP.js and set userIsLoggedIn
   
      })
      .catch(error => console.log(error))
  }

  handleInput = (evt) => {
    const {name,value} = evt.target;
    this.setState({[name]: value});
  }


  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <h1>LOG IN PAGE</h1>
        <label htmlFor="">Mail</label>
        <input name="mail" type="text" value={this.state.mail} onChange={this.handleInput} />
        <label htmlFor="">Password</label>
        <input name="password" type="text" value={this.state.password} onChange={this.handleInput} />
        <button>ok</button>
      </form>
      <p>You don't have an account ?</p>
      <Link to={"/SignUp"}>Sign up Here</Link>
      </React.Fragment>
    );
  }
}
