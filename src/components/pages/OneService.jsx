import React from "react";
import "./OneService.css";

const OneService = ({ name }) => {
  return (
    <div>
      <div>
        <button className="servicesBtn">
          <h3>{name}</h3>
        </button>
      </div>
    </div>
  );
};

export default OneService;
