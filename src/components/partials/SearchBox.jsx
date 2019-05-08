import React, { Component } from "react";
// import { searchCities } from "./../api/APIhandler";

// we are listening to any change in the search box (input) and setting the state each time
class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: ""
    };
  }

  render() {
    return <input className="search-box" onChange={this.handleChange} />;
  }
}

export default SearchBox;
