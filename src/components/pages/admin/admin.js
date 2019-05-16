import React, { Component } from "react";
import HousingList from "./housing/housingList";
import Cities from "./cities/cities";
import HousingCreateForm from "./housing/housingCreateForm";
class AdminPage extends Component {
  state = {
    activeCity: null
  };

  handleActiveCity = cityName => {
    console.log("active city changed : ", cityName);
    this.setState({ activeCity: cityName });
  };

  render() {
    return (
      <div>
        <HousingCreateForm />
        <hr />
        <hr />
        <h2>our houses</h2>
        <Cities setActiveCity={this.handleActiveCity} />
        <HousingList activeCity={this.state.activeCity} />
        <h2>our schools</h2>
      </div>
    );
  }
}

export default AdminPage;
