import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

class SearchBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="field">
          <div className="control has-icons-left">
            <div className="select">
              <select>
                <option selected>City</option>
                <option>Paris</option>
                <option>Miami</option>
                <option>Seoul</option>
              </select>
            </div>
            {/* <div className="icon is-small is-left">
              <FontAwesomeIcon icon={faGlobe} />
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBox;
