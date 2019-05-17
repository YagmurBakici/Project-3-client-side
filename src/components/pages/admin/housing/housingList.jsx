import React, { Component } from "react";
import { getAllHouse, deleteHouse } from "../../../../API/HousesApi";

class Housing extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCityId: null, houseList: [], backUpList: [] };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("new prop", newProps);
    this.setState({ activeCityId: newProps.activeCityId }, () => {
      this.fetchAllHouses();
    });
  }

  filterHouses() {
    // console.log("here in filter", this.state.houseList.length);

    if (!this.state.activeCityId) return;

    const filtered = this.state.backUpList.filter(house => {
      return this.state.activeCityId === house.city._id ? house : false;
    });

    console.log(filtered);

    this.setState({ houseList: filtered });
  }

  fetchAllHouses() {
    getAllHouse()
      .then(dataHouses => {
        this.setState(
          {
            houseList: [...dataHouses.data],
            backUpList: [...dataHouses.data]
          },
          () => this.filterHouses()
        );
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchAllHouses();
  };

  deleteHouse(id) {
    const filteredBackup = this.state.backUpList.filter(el => {
      return el._id !== id;
    });
    const filteredCurrentList = this.state.houseList.filter(el => {
      return el._id !== id;
    });
    this.setState({
      houseList: filteredCurrentList,
      backUpList: filteredBackup
    });
  }

  handleDelete = e => {
    const id = e.target.getAttribute("data-id");
    deleteHouse(id)
      .then(res => {
        this.deleteHouse(id);
      })
      .catch(err => console.error(err));
  };

  render() {
    const { houseList } = this.state;
    console.log("list", houseList);
    return (
      <ul>
        {houseList.length &&
          houseList.map((house, index) =>
            house.city._id === this.props.activeCityId ? (
              <li key={index}>
                <span>{house.name}</span>
                <i data-id={house._id} onClick={this.handleDelete}>
                  X
                </i>
              </li>
            ) : null
          )}
      </ul>
    );
  }
}

export default Housing;
