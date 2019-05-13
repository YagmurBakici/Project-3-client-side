import React, { Component } from "react";
import AuthService from "./../auth/ajax";
import {Link} from "react-router-dom";


export default class LogIn extends Component {
  constructor(props){
    super(props);
    this.state= {mail:"",password:""}
    this.service = new AuthService()
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
        this.props.getUser(res)
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
        <input name="mail" type="text" onChange={this.handleInput} />
        <label htmlFor="">Password</label>
        <input name="password" type="text" onChange={this.handleInput} />
        <button>ok</button>
      </form>
      <p>You don't have an account ?</p>
      <Link to={"/SignUp"}>Sign up Here</Link>
      </React.Fragment>
    );
  }
}
