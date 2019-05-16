import React from "react";
import Step from "./Step";

function getNeed() {
  return ["Yes", "No"];
}

export default class ServiceInsurance extends Step {
  constructor(props) {
    super(props);
    this.state = {
      name: "insuranceInfos",
      insuranceInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData ex: userData['userInfos] ou userData["housingInfos"]
        need: false,
        serviceFee: 200
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setInsuranceInfos(this.state);
    console.log("state set:", this.state.insuranceInfos);
  };

  handleChange = evt => {
    const { insuranceInfos } = this.state;
    insuranceInfos[evt.target.name] = evt.target.value;
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    this.setState({ insuranceInfos: insuranceInfos });
  };

  render() {
    return (
      <form className="service-form" onSubmit={this.handleSubmit}>
        <h2 className="title">Insurance infos</h2>
        <label htmlFor="need" className="label">
          Do you need our assistance for applying to insurances (health,
          housing, car etc.)? <br />
        </label>
        {getNeed().map((need, key) => (
          <React.Fragment key={key}>
            <label htmlFor={`need_${need}`} className="radio">
              {" "}
              <input
                type="radio"
                id={`need_${need}`}
                name="need"
                value={need}
                onChange={this.handleChange}
                checked={this.state.insuranceInfos.need === need ? true : false}
              />
              {need}
            </label>
            <br />
          </React.Fragment>
        ))}
        <button>Save and choose another service</button>
      </form>
    );
  }
}
