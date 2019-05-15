import React, { Component } from "react";
import StepOne from "./FormUserInfos";
import StepTwo from "./StepServices";
// import OneService from "./../pages/OneService";

export default class RegisterSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.step ? Number(props.step) : 1, // pour savoir où on en est dans les étapes
      stepLimit: 4, // 4 étapes (1-infos de base du user / 2-infos pour chacun des 5 services / 3-infos sign up / 4-choix du user pour les housings & schools)
      userData: {} // TOUTES les infos qui seront enregistrées au fur et à mesure de l'avancée du user dans le site (= infos provenant des 4 étapes. Les infos de chaque étape correspondent à un objet dans le userData : userInfos, servicesInfos{housingInfos,schoolInfos...}...)
    };
  }

  // handleCurrentStep permet pour chaque step, de set le state, d'enregistrer les données localement et d'aller à l'étape suivante
  handleCurrentStep = stepInfos => {
    console.log("stepInfos:", stepInfos);
    // if (Object.keys(stepInfos).length > 1)
    //   // si l'objet stepInfos a plus d'une key, ça veut dire que l'objet remonté ici n'est pas remonté au bon endroit
    //   throw new Error(
    //     "l'objet remonté au parent doit contenir une unique clé nommée"
    //   );
    const stepName = Object.keys(stepInfos)[0]; // on récupère la clé de l'objet reçu de l'enfant (le step)
    const stepValue = Object.values(stepInfos)[0];
    console.log("stepName:", stepName);

    this.setState(
      {
        userData: {
          ...this.state.userData, // on actualise ce qu'il y a dans les infos du userData
          [stepName]: stepValue
        }
      },
      () => {
        // on temporise, déclencher l'action seulement quand le state a été set
        this.storeLocally(stepInfos);
        if (this.props.nextUrl) {
          this.props.history.push(this.props.nextUrl);
        } else {
          this.goToNextStep();
        }
      }
    );
  };

  goToNextStep = evt => {
    const incr = this.state.currentStep + 1;
    if (incr > this.state.stepLimit) return;
    this.setState({ currentStep: incr }, () => {
      // on utilise ce callback pour executer l'action une fois le state set ...
    });
  };

  storeLocally(data) {
    // stockons les infos dans le store local (on pourra les récupérer même si user recharge ... )
    const JSONKey = "step" + this.state.currentStep;
    const JSONObject = JSON.stringify(data);
    window.localStorage.setItem(JSONKey, JSONObject);
    console.log("this is saved in the local storage:", JSONKey, JSONObject);
  }

  render() {
    const { currentStep } = this.state;
    return (
      <React.Fragment>
        {/* <h1 className="title">step {currentStep}</h1> */}
        {currentStep === 1 && <StepOne goToNextStep={this.handleCurrentStep} />}
        {currentStep === 2 && <StepTwo goToNextStep={this.handleCurrentStep} />}
        {currentStep === 3 && <p>step 3</p>}
        {currentStep === 4 && <p>step 4</p>}
      </React.Fragment>
    );
  }
}
