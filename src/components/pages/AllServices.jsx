////////////////////////////////////////////////
//////// ALL SERVICES PAGE CONTAINER ////////////
////////////////////////////////////////////////

import React, { Component } from "react";
import RegisterSteps from "./../flowManager/RegisterSteps";
import "./AllServices.css";
import {} from "@fortawesome/free-solid-svg-icons";

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
        {/* <div className="container-services">
          <OneService name="Housing" />
          <OneService name="Schools" />
          <OneService name="Bank" />
          <OneService name="Insurances" />
          <OneService name="Household Package (Electricity, Gas, Phone, Television and Internet subscriptions)" />
        </div> */}
        <div className="services_Page">
          <h1 className="Service_Title">SERVICES</h1>
          <div className="services_Container">
            <RegisterSteps
              className="second-step"
              step="2"
              history={this.props.history}
              nextUrl="/signup"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
