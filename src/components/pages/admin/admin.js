import React, { Component } from "react";
import HousingList from "./housing/housingList";
import Cities from "./cities/cities";
import HousingCreateForm from "./housing/housingCreateForm";
import "./admin.css";
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
      <div className="admin_page_Container ">
        <h1 className="admin_page_Title">Add a new House</h1>
        <HousingCreateForm updateHouseList={this.handleHouseListUpdate} />
        <hr />
        <hr />
        <h2 className="admin_page_Title">Display</h2>
        <div className="form_Container create_house_Container">
          <div className="cities_Container">
            <Cities
              activeCityId={this.state.activeCityId}
              setActiveCity={this.handleActiveCity}
            />
          </div>

          <div className="housing_Container">
            <HousingList activeCityId={this.state.activeCityId} />
          </div>

        </div>

      </div>
    );
  }
}

export default AdminPage;
