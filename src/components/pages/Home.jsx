import React, { Component } from "react";
// import Boxes from "./../partials/Boxes";
// import InitialForm from "./../InitialForm";
import RegisterSteps from "./../flowManager/RegisterSteps";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.history);
    if (this.props.history.location.search.match("unauthorized")) {
      this.props.logoutFromParent();
    }
  }
  render() {
    return (
      <div>
        <div className="home">
          <div className="intro">
            XPT is designed to provide you with all the resources you need to
            ease you into life in a new city. Our aim is to make things easier
            for you as you plan your move and settle into your new life in.XPT
            is there to make you feel quickly at home wherever you are in the
            world.
            <br /> Easier, faster, cheaper.
            <div className="steps">
              <strong>Step 1:</strong> Fill the form hereunder with your basic
              information
              <br /> <strong>Step 2:</strong> Then choose the services that you
              need
              <br /> <strong className="step">Step 3: </strong> Sign Up
              <br /> <strong className="step">Step 4: </strong> Drag and drop
              required files
              <br /> <strong className="step">Step 5: </strong> Now you can go
              and relax, we will handle all your formalities
            </div>
          </div>
          <img
            src="image.png"
            alt="logol"
            className="image"
            width="400"
            height="200"
          />
        </div>

        {/* <Boxes /> */}
        {/* <InitialForm props={this.props} /> */}
        {/*  */}
        <RegisterSteps
          step="1"
          history={this.props.history}
          nextUrl="/allservices"
        />
        {/*  */}
      </div>
    );
  }
}
