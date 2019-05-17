import React, { Component } from "react";
// import Boxes from "./../partials/Boxes";
// import InitialForm from "./../InitialForm";
import Footer from "../partials/Footer";

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
      <div className="homeall">
        <div className="home">
          <div className="intro">
            XPT is designed to provide you with all the resources you need to
            ease your life in a new city. Our aim is to make things easier for
            you as you plan your move and settle into your new life in.XPT is
            there to make you feel quickly at home wherever you are in the
            world.
            <br /> <strong className="quote">Easier, faster, cheaper.</strong>
            <div className="steps">
              <strong className="step">Step 1:</strong> Start by clicking the
              bottom hereunder
              <br /> <strong className="step">Step 2:</strong> Fill the form
              with your basic need
              <br /> <strong className="step">Step 3: </strong> Then choose the
              services that you need
              <br /> <strong className="step">Step 4: </strong> Sign Up required
              files
              <br /> <strong className="step">Step 5: </strong> Now you can go
              and relax, we will handle all your formalities
            </div>
          </div>
          <img
            src="image.png"
            alt="logol"
            className="image"
            width="500"
            height="200"
          />{" "}
          */}
          {/* <Boxes /> */}
          {/* <InitialForm props={this.props} /> */}
          <button
            className="input_send button is-link started"
            type="button"
            onClick={() => {
              this.props.history.push("/allservices");
            }}
          >
            GET STARTED
          </button>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
