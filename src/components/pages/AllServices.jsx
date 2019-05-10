////////////////////////////////////////////////
//////// ALL SERVICES PAGE CONTAINER ////////////
////////////////////////////////////////////////

import React from "react";
import OneService from "./OneService";

export default function AllServices({ props }) {
  return (
    <React.Fragment>
      <h1>Step 2 : Services</h1>
      <div className="container-services">
        <OneService name="Housing" />
        <OneService name="Schools" />
        <OneService name="Bank" />
        <OneService name="Insurances" />
        <OneService name="Household Package (Electricity, Gas, Phone, Television and Internet subscriptions)" />
      </div>
    </React.Fragment>
  );
}
