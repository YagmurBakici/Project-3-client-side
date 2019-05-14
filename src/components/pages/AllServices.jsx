////////////////////////////////////////////////
//////// ALL SERVICES PAGE CONTAINER ////////////
////////////////////////////////////////////////

import React from "react";
import OneService from "./OneService";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

export default function AllServices({ props }) {
  return (
    <React.Fragment>
      <h1>Step 2 : Services</h1>
      <div className="container-services">
        <OneService
          name="Housing"
          icon={faHome}
          text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolores voluptate sapiente non sint eius. Saepe cumque dolorem exercitationem explicabo."
        />
        <OneService name="Schools" icon={faUniversity} />
        <OneService name="Bank" icon={faPiggyBank} />
        <OneService name="Insurances" icon={faNotesMedical} />
        <OneService
          name="Household Package (Electricity, Gas, Phone, Television and Internet subscriptions)"
          icon="faHome"
        />
      </div>
    </React.Fragment>
  );
}
