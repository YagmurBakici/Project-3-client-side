import React, { Component } from "react";
import HousingList from "./housing/housingList";
import Cities from "./cities/cities";
import HousingCreateForm from "./housing/housingCreateForm";
class AdminPage extends Component {
  state = {
    activeCityId: null
  };

  handleActiveCity = cityId => {
    console.log("active city changed : ", cityId);
    this.setState({ activeCityId: cityId });
  };

  handleHouseListUpdate = house => {
    console.log("new house", house.city);
    this.setState({ activeCityId: house.city }, () => {
      console.log("active city id changed", this.state.activeCityId);
    });
  };

  render() {
    return (
      <div>
        <HousingCreateForm updateHouseList={this.handleHouseListUpdate} />
        <hr />
        <hr />
        <h2>our houses</h2>
        <Cities
          activeCityId={this.state.activeCityId}
          setActiveCity={this.handleActiveCity}
        />
        <HousingList activeCityId={this.state.activeCityId} />
        <h2>our schools</h2>
      </div>
    );
  }
}

export default AdminPage;
