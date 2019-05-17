import React from "react";

import "./Services.css";
import Step from "./Step";

/**
 * returns an enum of of possible housing types
 * @todo: fecth the data from dedicated model
 */

// function getNbChildren() {
//   const nbChildren = Number(
//     JSON.parse(window.localStorage.getItem("userInfos")).nbChildren
//   ); // je récupère du local storage le nombre d'enfants déclaré par le user
//   const array = [...Array(nbChildren).keys()]; // je fais un array [0,1,... jusqu'au nombre d'enfants]
//   return array;
// }

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
      name: "housingInfos",
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
    console.log("state set:", this.state.housingInfos);
    console.log("YOOOOOOOOOOO SUBMITTEEEEEEEEEED");
  };

  handleChange = evt => {
    const { housingInfos } = this.state;
    housingInfos[evt.target.name] = evt.target.value;
    this.setState({ housingInfos: housingInfos });
    console.log("changed (key/value):", evt.target.name, evt.target.value);
    // console.log("housing object just was just changed:", housingInfos);
    // console.log("I AM HEEEEEEEEEERE", this.state.housingInfos);
    // console.log("I AM HEEEEEEEEEERE TOO", Number(this.state.housingInfos.rent));
    // console.log(Boolean(window.localStorage.getItem("userInfos")));
  };

  handleCheckboxes = evt => {
    const { housingInfos: housingInfosCopy } = this.state;
    housingInfosCopy[evt.target.name] = evt.currentTarget.checked;
    this.setState({ housingInfos: housingInfosCopy });
    console.log(this.state);
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
                checked={
                  this.state.housingInfos.housingType === type ? true : false
                }
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
          value={this.state.housingInfos.bedrooms}
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
          value={this.state.housingInfos.bathrooms}
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
              checked={this.state.housingInfos.balcony === true ? true : false}
            />{" "}
            Balcony
            <label htmlFor="terrace" className="label" />
            <input
              type="checkbox"
              id="terrace"
              name="terrace"
              onChange={this.handleCheckboxes}
              checked={this.state.housingInfos.terrace === true ? true : false}
            />{" "}
            Terrace
            <label htmlFor="garden" className="label" />
            <input
              type="checkbox"
              id="garden"
              name="garden"
              onChange={this.handleCheckboxes}
              checked={this.state.housingInfos.garden === true ? true : false}
            />{" "}
            Garden
            <label htmlFor="parking" className="label" />
            <input
              type="checkbox"
              id="parking"
              name="parking"
              onChange={this.handleCheckboxes}
              checked={this.state.housingInfos.parking === true ? true : false}
            />
            Parking
            <label htmlFor="handicapAccess" className="label" />
            <input
              type="checkbox"
              id="handicapAccess"
              name="handicapAccess"
              onChange={this.handleCheckboxes}
              checked={
                this.state.housingInfos.handicapAccess === true ? true : false
              }
            />
            Handicap access
            <label htmlFor="petFriendly" className="label" />
            <input
              type="checkbox"
              id="petFriendly"
              name="petFriendly"
              onChange={this.handleCheckboxes}
              checked={
                this.state.housingInfos.petFriendly === true ? true : false
              }
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
                checked={
                  this.state.housingInfos.lifestyle === lifestyle ? true : false
                }
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
          value={this.state.housingInfos.rent}
        />

        <button className="choose">Save and choose another service</button>
      </form>
    );
  }
}
