////////////////////////////////////////////////
//////// ALL SERVICES PAGE CONTAINER ////////////
////////////////////////////////////////////////

import React, { Component } from "react";
import OneService from "./OneService";
import HousingForm from "./HousingForm";
import SchoolForm from "./SchoolForm";

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
    let questions = null;
    if (this.state.displayQuestions) {
      questions = (
        <div>
          {this.state.questions.map((question, index) => {
            return <HousingForm key={question.id} title={question.title} /><HousingForm key={question.id} title={question.title} />;
          })}
        </div>
      );
    }

    return (
      <React.Fragment>
        <h1>Step 2 : Services</h1>
        <div className="container-services">
          <OneService name="Housing" />
          <OneService name="Schools" />
          <OneService name="Bank" />
          <OneService name="Insurances" />
          <OneService name="Household Package (Electricity, Gas, Phone, Television and Internet subscriptions)" />
        </div>
        <div>
          <button className="btn" onClick={this.displayQuestion}>
            Complete the form
          </button>
          {questions}
        </div>
      </React.Fragment>
    );
  }
}
