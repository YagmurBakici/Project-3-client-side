import React, { Component } from "react";
import { getAllcities } from "../../../../API/CityApi";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
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
    const { cities } = this.state;

    return cities.length
      ? cities.map((oneCity, index) => (
          <button
            key={index}
            onClick={e => this.props.setActiveCity(oneCity.name)}
          >
            {oneCity.name}
          </button>
        ))
      : null;
  }
}

export default Cities;
