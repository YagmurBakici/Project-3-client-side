import React, { Component } from "react";

function getNeed() {
  return ["Yes", "No"];
}

export default class ServiceBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData ex: userData['userInfos] ou userData["housingInfos"]
        need: false,
        serviceFee: 150
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setBankInfos(this.state);
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