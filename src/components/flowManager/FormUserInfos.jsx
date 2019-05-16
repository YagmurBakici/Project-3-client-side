import React from "react";
import Step from "./Step";

function getCities() {
  return ["Paris", "Miami", "Seoul"];
}

export default class FormUserInfos extends Step {
  constructor(props) {
    super(props);
    this.state = {
      name: "userInfos",
      userInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData / ex: userData['userInfos] ou userData["housingInfos"]
        city: "",
        nbAdults: 1,
        nbChildren: 0,
        arrivalDate: ""
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("submited state:", this.state);
    this.props.setUserInfos(this.state);
  };

  handleChange = evt => {
    const { userInfos } = this.state;
    userInfos[evt.target.name] = evt.target.value;
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    this.setState({ userInfos: userInfos });
  };

  render() {
    return (
      <div>
        <h1>Step 1 : Give us your basic moving infos</h1>
        <form className="service-form" onSubmit={this.handleSubmit}>
          <label htmlFor="city" className="label">
            Where are you moving to? <br />{" "}
          </label>
          {getCities().map((city, key) => (
            <React.Fragment key={key}>
              <label htmlFor={`city_${city}`} className="radio">
                {" "}
                <input
                  type="radio"
                  id={`city_${city}`}
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
                {city}
              </label>
            </React.Fragment>
          ))}

          <label htmlFor="nbAdults" className="label">
            How many adults are moving?
          </label>
          <input
            type="number"
            min="1"
            id="nbAdults"
            name="nbAdults"
            className="input"
            onChange={this.handleChange}
            value={this.state.userInfos.nbAdults}
          />

          <label htmlFor="nbChildren" className="label">
            How many children are moving?
          </label>
          <input
            type="number"
            min="0"
            id="nbChildren"
            name="nbChildren"
            className="input"
            onChange={this.handleChange}
            value={this.state.userInfos.nbChildren}
          />

          <label htmlFor="arrivalDate" className="label">
            When are you moving?
          </label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            className="input"
            data-date-inline-picker="true"
            onChange={this.handleChange}
            value={this.state.userInfos.arrivalDate}
          />

          <button>Next step</button>
        </form>
      </div>
    );
  }
}
