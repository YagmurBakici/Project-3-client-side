import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faGlobe} />

export default class InitialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      nbAdults: "",
      nbChildren: "",
      arrivalDate: ""
    };
  }

  handleChange = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [key]: value });
    // console.log(this.state);
  };
  componentDidMount() {
    console.log(this.props);
  }
  handleSubmit = evt => {
    evt.preventDefault();

    const userInfosAsJSON = JSON.stringify(this.state);
    console.log(userInfosAsJSON);
    window.localStorage.setItem("userInfos", userInfosAsJSON);
    // window.location = "/allservices";
    this.props.props.history.push("/allservices");
    // stocker dans le localStorage au fur et à mesure

    console.log("submitteeeeed", this.state);
    console.log(JSON.parse(window.localStorage.userInfos).city);
  };

  render() {
    const { city, nbAdults, nbChildren, arrivalDate } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="city" className="label">
          Where are you moving to?
        </label>
        <select
          type="text"
          id="city"
          name="city"
          className="input is-info"
          onChange={this.handleChange}
        >
          <option value="" />

          <option>Paris</option>
          <option>Miami</option>
          <option>Seoul</option>
        </select>

        {/* cities.map(city => {
        <option>{city}</option>
        }) */}
        <label htmlFor="nbAdults" className="label">
          How many adults are moving?
        </label>
        <input
          type="number"
          min="0"
          id="nbAdults"
          name="nbAdults"
          className="input is-info"
          onChange={this.handleChange}
        />
        <label htmlFor="nbChildren" className="label">
          How many children are moving?
        </label>
        <input
          type="number"
          min="0"
          id="nbChildren"
          name="nbChildren"
          className="input is-info"
          onChange={this.handleChange}
        />
        <label htmlFor="arrivalDate" className="label">
          When are you moving?
        </label>
        <input
          type="date"
          id="arrivalDate"
          name="arrivalDate"
          className="input is-info"
          min="2018-"
          max="2021-06-30"
          onChange={this.handleChange}
        />
        <button className="btn">Next step</button>
      </form>
    );
  }
}
