import React, { Component } from "react";
import { getAllcities } from "../../../../API/CityApi";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCityId: null,
      cities: []
    };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("cities list", newProps);
    this.setState({ activeCityId: newProps.activeCityId });
  }

  componentDidMount = () => {
    getAllcities()
      .then(dataCities => {
        //console.log(dataCities.data.dbRes);
        this.setState({ cities: [...dataCities.data.dbRes] });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { cities, activeCityId } = this.state;
    return cities.length
      ? cities.map((city, index) => (
          <button
            className="button is-link input_send"
            style={{ background: activeCityId === city._id ? "red" : null }}
            key={city._id}
            onClick={e => this.props.setActiveCity(city._id)}
          >
            {city.name}
          </button>
        ))
      : null;
  }
}

export default Cities;
