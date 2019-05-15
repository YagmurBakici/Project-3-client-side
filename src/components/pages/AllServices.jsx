////////////////////////////////////////////////
//////// ALL SERVICES PAGE CONTAINER ////////////
////////////////////////////////////////////////

import React, { Component } from "react";
import RegisterSteps from "./../flowManager/RegisterSteps";
import "./AllServices.css";

export default class AllServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [{ id: "fdsd", title: "" }],
      displayQuestions: false
    };
  }

  displayQuestion = () => {
    this.setState({
      displayQuestions: !this.state.displayQuestions
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Step 2 : Services</h1>
        {/* <div className="container-services">
          <OneService name="Housing" />
          <OneService name="Schools" />
          <OneService name="Bank" />
          <OneService name="Insurances" />
          <OneService name="Household Package (Electricity, Gas, Phone, Television and Internet subscriptions)" />
        </div> */}
        <RegisterSteps
          step="2"
          history={this.props.history}
          nextUrl="/signup"
        />
      </React.Fragment>
    );
  }
}
