import React, { Component } from "react";
import { getAllHouse } from "../../../../API/HousesApi";

class Housing extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCity: null, houseList: [], backUpList: [] };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({ activeCity: newProps.activeCity }, () => {
      this.filterHouses();
    });
  }

  filterHouses() {
    // console.log("here in filter", this.state.houseList.length);

    if (!this.state.activeCity) return;

    const filtered = this.state.backUpList.filter(house =>
      this.state.activeCity === house.city.name ? house : false
    );

    this.setState({ houseList: filtered });
  }

  componentDidMount = () => {
    getAllHouse()
      .then(dataHouses => {
        // console.log("iciiii", dataHouses.data);
        this.setState({
          houseList: [...dataHouses.data],
          backUpList: [...dataHouses.data]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(
      "---------------------",
      this.props.activeCity,
      this.state.houseList
    );
    const { houseList } = this.state;
    return (
      <ul>
        {houseList.map((house, index) =>
          house.city.name === this.props.activeCity ? (
            <li key={index}>{house.name}</li>
          ) : null
        )}
      </ul>
    );
  }
}

export default Housing;
