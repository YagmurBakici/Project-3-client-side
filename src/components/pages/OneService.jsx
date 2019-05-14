import "./OneService.css";
import React from "react";
import Popup from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OneService = ({ name, text, icon }) => {
  return (
    <Popup
      trigger={
        <button className="servicesBtn">
          {name} <FontAwesomeIcon icon={icon} />
        </button>
      }
      modal
    >
      {close => (
        <div className="modal">
          <a href="modal" className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> {name}</div>
          <div className="content">{text}</div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed");
                close();
              }}
            >
              Add in the chart
            </button>

            <button
              className="button"
              onClick={() => {
                console.log("modal closed");
                close();
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default OneService;
