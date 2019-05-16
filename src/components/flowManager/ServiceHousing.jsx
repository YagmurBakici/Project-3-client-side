import React from "react";

import "./Services.css";
import Step from "./Step";

/**
 * returns an enum of of possible housing types
 * @todo: fecth the data from dedicated model
 */
function getHousingTypes() {
  return ["House", "Apartment"];
}
function getLifestyles() {
  return ["Family friendly", "Lively", "Young but calm"];
}

export default class ServiceHousing extends Step {
  constructor(props) {
    super(props);
    this.state = {
      housingInfos: {
        // cette clé est utilisée par le parent pour nommer les propriétés d'userData ex: userData['userInfos] ou userData["housingInfos"]
        housingType: "",
        bedrooms: 0,
        bathrooms: 0,
        balcony: false,
        terrace: false,
        garden: false,
        parking: false,
        handicapAccess: false,
        petFriendly: false,
        lifestyle: "",
        rent: 0,
        serviceFee: 1200
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setHousingInfos(this.state);
    console.log(this.state);
  };

  handleChange = evt => {
    const { housingInfos } = this.state;
    housingInfos[evt.target.name] = evt.target.value;
    this.setState({ housingInfos: housingInfos });
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    // console.log("housing object just was just changed:", housingInfos);
  };

  handleCheckboxes = evt => {
    const { housingInfos: housingInfosCopy } = this.state;
    housingInfosCopy[evt.target.name] = evt.currentTarget.checked;
    this.setState({ housingInfos: housingInfosCopy });
  };

  render() {
    return (
      <form className="service-form" onSubmit={this.handleSubmit}>
        <h2 className="title">Housing infos</h2>

        <label htmlFor="lifestyle" className="label">
          What type of housing are you looking for?
          <br />
        </label>
        {getHousingTypes().map((type, key) => (
          <React.Fragment key={key}>
            <label htmlFor={`housingType_${type}`} className="radio">
              {" "}
              <input
                type="radio"
                id={`housingType_${type}`}
                name="housingType"
                value={type}
                onChange={this.handleChange}
              />
              {type}
            </label>
          </React.Fragment>
        ))}

        <label htmlFor="bedrooms" className="label">
          How many bedrooms?
        </label>
        <select
          id="bedrooms"
          name="bedrooms"
          className="input"
          onChange={this.handleChange}
        >
          <option value="" />
          <option value="1">1 +</option>
          <option value="2">2 +</option>
          <option value="3">3 +</option>
          <option value="4">4 +</option>
          <option value="5">5 +</option>
        </select>

        <label htmlFor="bathrooms" className="label">
          How many bathrooms?
        </label>
        <select
          id="bathrooms"
          name="bathrooms"
          className="input"
          onChange={this.handleChange}
        >
          <option value="" />
          <option value="1">1 +</option>
          <option value="2">2 +</option>
          <option value="3">3 +</option>
          <option value="4">4 +</option>
          <option value="5">5 +</option>
        </select>

        <div id="amenities">
          Choose your amenities: <br />
          <label htmlFor="balcony" className="label" />
          <div className="amenities-checkboxes">
            <input
              type="checkbox"
              id="balcony"
              name="balcony"
              onChange={this.handleCheckboxes}
            />{" "}
            Balcony
            <label htmlFor="terrace" className="label" />
            <input
              type="checkbox"
              id="terrace"
              name="terrace"
              onChange={this.handleCheckboxes}
            />{" "}
            Terrace
            <label htmlFor="garden" className="label" />
            <input
              type="checkbox"
              id="garden"
              name="garden"
              onChange={this.handleCheckboxes}
            />{" "}
            Garden
            <label htmlFor="parking" className="label" />
            <input
              type="checkbox"
              id="parking"
              name="parking"
              onChange={this.handleCheckboxes}
            />
            Parking
            <label htmlFor="handicapAccess" className="label" />
            <input
              type="checkbox"
              id="handicapAccess"
              name="handicapAccess"
              onChange={this.handleCheckboxes}
            />
            Handicap access
            <label htmlFor="petFriendly" className="label" />
            <input
              type="checkbox"
              id="petFriendly"
              name="petFriendly"
              onChange={this.handleCheckboxes}
            />{" "}
            Pet friendly
          </div>
        </div>

        <label htmlFor="lifestyle" className="label">
          What type of lifestyle are you looking for?
          <br />{" "}
        </label>
        {getLifestyles().map((lifestyle, key) => (
          <React.Fragment key={key}>
            <label htmlFor={`lifestyle_${lifestyle}`} className="radio">
              <input
                type="radio"
                id={`lifestyle_${lifestyle}`}
                name="lifestyle"
                value={lifestyle}
                onChange={this.handleChange}
              />
              {lifestyle}
            </label>
          </React.Fragment>
        ))}

        <label htmlFor="rent" className="label">
          What's your maximum monthly rent budget (€)?
        </label>
        <input
          type="number"
          id="rent"
          name="rent"
          className="input"
          min="0"
          onChange={this.handleChange}
        />

        <button>Save and choose another service</button>
      </form>
    );
  }
}
