import React from "react";
import Step from "./Step";

function getNeed() {
  return ["Yes", "No"];
}

export default class ServiceCommunication extends Step {
  constructor(props) {
    super(props);
    this.state = {
      name: "communicationInfos",
      communicationInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData ex: userData['userInfos] ou userData["housingInfos"]
        need: false,
        serviceFee: 100
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setCommunicationInfos(this.state);
    console.log("state set:", this.state.communicationInfos);
  };

  handleChange = evt => {
    const { communicationInfos } = this.state;
    communicationInfos[evt.target.name] = evt.target.value;
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    this.setState({ communicationInfos: communicationInfos });
  };

  render() {
    return (
      <form className="service-form" onSubmit={this.handleSubmit}>
        <h2 className="title">Household Package infos</h2>
        <label htmlFor="need" className="label">
          Do you need our assistance to get your phone and Internet
          subcriptions? <br />
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
              />
              {need}
            </label>{" "}
            <br />
          </React.Fragment>
        ))}
        <button>Save and choose another service</button>
      </form>
    );
  }
}
