import React, { Component } from "react";
import "react-bulma-components";
import Nav from "./components/partials/Nav";
import Home from "./components/pages/Home";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import LogIn from "./components/pages/LogIn";
import AllServices from "./components/pages/AllServices";
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthService from "./components/auth/ajax";
import Profile from "./components/pages/Profile";

const history = createBrowserHistory();
export default class App extends Component {
=======
import { Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthService from "./components/auth/ajax";
import Profile from "./components/pages/Profile";
import { withRouter } from "react-router-dom";

// import {createBrowserHistory} from "history";
// const history = createBrowserHistory();

// const history = createBrowserHistory();
class App extends Component {
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

<<<<<<< HEAD
  fetchUser() {
=======
  componentDidMount() {
    this.fetchUser();
    this.unlisten = this.props.history.listen(l => {
      this.fetchUser();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  fetchUser() {
    console.log("fetch the user", this.state.loggedInUser)
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  logoutUser = () => {
    this.service.logout().then(() => {
<<<<<<< HEAD
      this.setState({ loggedInUser: null });
      // this.props.getUser(null)
=======
      this.setState({ loggedInUser: false }, () => {
        this.props.history.push("/login");
      });
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
    });
  };

  getTheUser = userObj => {
<<<<<<< HEAD
=======
    console.log("at get the user, userObj")
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
    this.setState(
      {
        loggedInUser: userObj
      },
      () => {
        // ce callback est exec une fois le state set ....
<<<<<<< HEAD
        console.log("lucky ?", this.state.loggedInUser);
        // console.log(this.history)
        history.push("/toto");
=======
        // console.log("lucky ?", this.state.loggedInUser)
        console.log(this.state.loggedInUser);
        this.props.history.push("/profile");
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
      }
    );
  };

  render() {
<<<<<<< HEAD
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Nav
            userInSession={this.state.loggedInUser}
            logoutFromParent={this.logoutUser}
          />
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
          <Nav userInSession={this.state.loggedInUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/allservices" component={AllServices} />
            <Route path="/contact" component={Contact} />
            <Route path="/Profile" component={Profile} />
            <Route
              path="/login"
              render={props => <LogIn {...props} getUser={this.getTheUser} />}
            />
            <Route
              path="/signup"
              render={props => <SignUp {...props} getUser={this.getTheUser} />}
            />
          </Switch>
        </div>
      );
    }
=======
    // this.fetchUser();
    return (
      <div className="App">
        <Nav
          userInSession={this.state.loggedInUser}
          logoutFromParent={this.logoutUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route path="/profile" render={props => {
              return !this.state.loggedInUser ? 
                <Redirect to="/login" /> : <Profile {...props} getUser={this.getTheUser} />
              ;
            }} />
          <Route path="/allservices" component={AllServices} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={props => {
              return !this.state.loggedInUser ? (
                <LogIn {...props} getUser={this.getTheUser} />
              ) : null;
            }}
          />
          <Route
            path="/signup"
            render={props => {
              return !this.state.loggedInUser ? (
                <SignUp {...props} getUser={this.getTheUser} />
              ) : null;
            }}
          />
          )} />
        </Switch>
      </div>
    );
>>>>>>> 392f148a0ddbf1665f4e60d45426d4ff508fd84a
  }
}

export default withRouter(App);
