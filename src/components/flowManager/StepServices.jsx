import React, { Component } from "react";
import ServicesList from "./ServicesList";
import ServiceHousing from "./ServiceHousing";
import ServiceSchool from "./ServiceSchool";
import ServiceBank from "./ServiceBank";
import ServiceInsurance from "./ServiceInsurance";
import ServiceCommunication from "./ServiceCommunication";
import FormUserInfos from "./FormUserInfos";

export default class FormServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentService: null,
      services: [
        "basic-user-infos",
        "housing",
        "school",
        "bank",
        "insurance",
        "household-package"
      ],
      servicesInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData // ex: userData["userInfos"] ou userData["housingInfos"]
      },
      warningMessage: "you must choose at least one service"
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    if (Object.keys(this.state.servicesInfos).length === 0) {
      this.setState({
        warningMessage: "you must choose at least one service"
      });
    } else {
      console.log(
        "the current object's infos were relayed to parent (stepServices)",
        this.state.servicesInfos
      );
      this.setState({ warningMessage: null });

      this.props.goToNextStep(this.state.servicesInfos);
    }
  };

  setCurrentServiceInfos = serviceInfos => {
    const serviceName = Object.keys(serviceInfos)[0]; // on récupère la clé de l'objet reçu de l'enfant (le step)
    const serviceValue = Object.values(serviceInfos)[0];
    console.log("serviceName:", serviceValue);
    console.log("serviceValue:", serviceValue);
    const { servicesInfos } = this.state; // faire une copy de l'objet this.state.servicesInfos as objectCopy
    // console.log(this.state);
    servicesInfos[serviceName] = serviceValue; // ajoute une clé à la copie de l'objet
    console.log(servicesInfos);

    this.setState({ servicesInfos: servicesInfos }, () => {
      console.log("stepServices' state:", this.state);
      this.setState({ currentService: null, warningMessage: null });
    });
  };

  setCurrentService = name => {
    console.log("current service is:", name);
    this.setState({ currentService: name });
  };

  render() {
    const { currentService, services, warningMessage } = this.state;
    return (
      <div>
        <h1>Step 1 : Give us your basic moving infos</h1>{" "}
        <ServicesList
          parentHandler={this.setCurrentService}
          services={services}
        />
        {currentService === "basic-user-infos" && (
          <FormUserInfos setUserInfos={this.setCurrentServiceInfos} />
        )}{" "}
        <h2 className="title">
          Step 2 : Choose the services for which you need our assistance and
          your preferences
        </h2>
        {currentService === "housing" && (
          <ServiceHousing setHousingInfos={this.setCurrentServiceInfos} />
        )}
        {currentService === "school" && (
          <ServiceSchool setSchoolInfos={this.setCurrentServiceInfos} />
        )}
        {currentService === "bank" && (
          <ServiceBank setBankInfos={this.setCurrentServiceInfos} />
        )}
        {currentService === "insurance" && (
          <ServiceInsurance setInsuranceInfos={this.setCurrentServiceInfos} />
        )}
        {currentService === "household-package" && (
          <ServiceCommunication
            setCommunicationInfos={this.setCurrentServiceInfos}
          />
        )}
        {!warningMessage && (
          <button onClick={this.handleSubmit}>
            SUBMIT all and go to next step
          </button>
        )}
      </div>
    );
  }
}
