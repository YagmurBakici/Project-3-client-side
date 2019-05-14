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
            {/* <Popup
              // trigger={<button className="button"> More </button>}
            //   position="top center"
            //   closeOnDocumentClick
            // >
            //   <span>
            //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            //     magni omnis delectus nemo, maxime molestiae dolorem numquam
            //     mollitia, voluptate ea, accusamus excepturi deleniti ratione
            //     sapiente! Laudantium, aperiam doloribus. Odit, aut.
            //   </span>
            // </Popup> */}
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
