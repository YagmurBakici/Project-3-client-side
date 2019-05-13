import React, { Component } from "react";
import Boxes from "./../partials/Boxes";
import InitialForm from "./../InitialForm";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <p className="intro">
            XPT is designed to provide you with all the resources you need to
            ease you into life in a new city. Our aim is to make things easier
            for you as you plan your move and settle into your new life in.XPT
            is there to make you feel quickly at home wherever you are in the
            world.
            <br /> Easier, faster, cheaper.
            <p>
              <strong>Step 1:</strong> Fill the form hereunder with your basic
              information
              <br /> <strong>Step 2:</strong> Then choose the services that you
              need
              <br /> <strong>Step 3: </strong> Sign Up
              <br /> <strong>Step 4: </strong> Drag and drop required files
              <br /> <strong>Step 5: </strong> Now you can go and relax, we will
              handle all your formalities
            </p>
          </p>
          <img src="image.png" alt="image" className="image" />
        </div>

        {/* <Boxes /> */}
        <InitialForm props={this.props} />
      </div>
    );
  }
}
