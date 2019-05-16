import React from "react";
import Step from "./Step";

function getNeed() {
  return ["Yes", "No"];
}

export default class ServiceBank extends Step {
  constructor(props) {
    super(props);
    this.state = {
      name: "bankInfos",
      bankInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData ex: userData['userInfos] ou userData["housingInfos"]
        need: "No",
        serviceFee: 150
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setBankInfos(this.state);
    console.log("state set:", this.state.bankInfos);
  };

  handleChange = evt => {
    const { bankInfos } = this.state;
    bankInfos[evt.target.name] = evt.target.value;
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    this.setState({ bankInfos: bankInfos });
  };

  render() {
    return (
      <form className="service-form" onSubmit={this.handleSubmit}>
        <h2 className="title">Bank infos</h2>
        <label htmlFor="need" className="label">
          Do you need our assistance for setting a new bank account? <br />
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
                checked={this.state.bankInfos.need === need ? true : false}
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
