import React, { Component } from "react";
import { createNewHouse } from "../../../../API/HousesApi";
import { getAllcities } from "../../../../API/CityApi";

const housingTypes = ["house", "apartment", "duplex"];
const lifestyles = ["family friendly", "lively", "young but calm"];

export default class HousingCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      housingTypes: housingTypes,
      lifestyles: lifestyles,
      houseInfos: {
        name: "",
        address: "",
        bathrooms: 0,
        bedrooms: 0,
        city: "",
        housingType: "housingType",
        lifestyle: "",
        description: "",
        amenities: {
          balcony: false,
          terrace: false,
          garden: false,
          parking: false,
          handicapAccess: false,
          petFriendly: false
        },
        monthlyRent: 0
      }
    };
  }

  componentDidMount() {
    getAllcities().then(res => {
      this.setState({ cities: res.data.dbRes });
    });
  }

  handleChange = evt => {
    const copy = this.state.houseInfos;
    copy[evt.target.name] = evt.target.value;
    this.setState({ houseInfos: copy });

    // console.log(evt.target.name, evt.target.value);
  };

  handleCheckboxes = evt => {
    // console.log(evt.target.checked);
    this.setState({
      amenities: evt.target.checked
    });
  };

  handleCheckboxes = evt => {
    const { houseInfos: housingInfosCopy } = this.state;
    housingInfosCopy.amenities[evt.target.name] = evt.currentTarget.checked;
    this.setState({ houseInfos: housingInfosCopy });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    // call to the backend
    // Post request

    createNewHouse({
      name: this.state.houseInfos.name,
      description: this.state.houseInfos.description,
      address: this.state.houseInfos.address,
      city: this.state.houseInfos.city,
      bedrooms: this.state.houseInfos.bedrooms,
      bathrooms: this.state.houseInfos.bathrooms,
      housingType: this.state.houseInfos.housingType,
      lifestyle: this.state.houseInfos.lifestyle,
      monthlyRent: this.state.houseInfos.rent
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err.response));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">house name</label>
        <input name="name" type="text" onChange={this.handleChange} />
        <label htmlFor="cities">cities</label>

        <select name="city" id="cities" onChange={this.handleChange}>
          {this.state.cities.length &&
            this.state.cities.map((city, index) => (
              <option key={index} value={city._id}>
                {city.name}
              </option>
            ))}
        </select>
        <label>housing type</label>
        <select
          name="housingType"
          id="housingType"
          onChange={this.handleChange}
        >
          {this.state.housingTypes.length &&
            this.state.housingTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
        </select>

        <label>description</label>
        <input name="description" type="text" onChange={this.handleChange} />

        <label>Address</label>
        <input name="address" type="text" onChange={this.handleChange} />

        <label htmlFor="bedrooms">Bedrooms</label>
        <input
          name="bedrooms"
          type="number"
          min="1"
          onChange={this.handleChange}
        />

        <label htmlFor="Bathrooms">Bathrooms</label>
        <input
          name="Bathrooms"
          type="number"
          min="1"
          onChange={this.handleChange}
        />

        <label>lifestyle</label>
        <select name="lifestyle" id="lifestyle" onChange={this.handleChange}>
          {this.state.lifestyles.length &&
            this.state.lifestyles.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
        </select>

        <label htmlFor="monthly_rent">Monthly Rent</label>
        <input
          name="monthly_rent"
          type="number"
          min="1"
          onChange={this.handleChange}
        />

        <div id="amenities">
          Amenities : <br />
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

        <button>ok</button>
      </form>
    );
  }
}

// onSubmit={}
