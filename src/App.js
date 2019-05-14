import React, { Component } from "react";
import "react-bulma-components";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import AllServices from "./components/pages/AllServices";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import {createBrowserHistory} from "history";
import AuthService from "./components/auth/ajax";
>>>>>>> b8c52345f2931827d73763f9deabe102f7c01744

const history = createBrowserHistory();
export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {loggedInUser:null};
    this.service = new AuthService();
  }

  fetchUser(){
    if(this.state.loggedInUser === null){
      this.service.loggedin()
        .then(response => {
          this.setState({ 
            loggedInUser : response
            });
        })
        .catch(err =>{
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  logoutUser = () => {
    this.service.logout()
      .then(()=>{
        this.setState({ loggedInUser: null  });
        // this.props.getUser(null)
      })
  }


  getTheUser = userObj => {
    this.setState({ 
      loggedInUser: userObj
    }, () => { // ce callback est exec une fois le state set ....
      console.log("lucky ?", this.state.loggedInUser) 
      // console.log(this.history)
      history.push("/toto")
    });
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Nav userInSession={this.state.loggedInUser}  logoutFromParent={this.logoutUser}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/allservices" component={AllServices} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav userInSession={this.state.loggedInUser}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/allservices" component={AllServices} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={(props)=><LogIn {...props} getUser={this.getTheUser}/>} />
            <Route path="/signup" render={(props)=><SignUp {...props} getUser={this.getTheUser}/>}/>
          </Switch>
        </div>
      );
    }
  }
}
