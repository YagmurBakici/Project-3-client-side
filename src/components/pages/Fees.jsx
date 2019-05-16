import React from "react";
import OneFee from "./OneFee";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function Fees({ props }) {
  return (
    <React.Fragment>
      <section className="fee_Container">
        <h1 className="fee">Service Fees</h1>
        <div className="container-services">
          <OneFee
            name="Housing"
            icon={faHome}
            text1="This fee covers :"
            text2="the housing search in accordance with your requirements"
            text3="all the documents management with the real state agency and/or house owner"
            price=" 1200 "
          />
          <OneFee
            name="School"
            icon={faUniversity}
            text1="This fee covers :"
            text2="the school search in accordance with your requirements"
            text3="all the documents with the school management"
            price=" 500 "
          />
          <OneFee
            name="Bank"
            icon={faPiggyBank}
            text1="This fee covers all the documents management for each bank account opening."
            price=" 150 "
          />
          <OneFee
            name="Insurance"
            icon={faNotesMedical}
            text1="This fee covers all the documents management for each insurance registration."
            price=" 200 "
          />
          <OneFee
            name="Household Package"
            icon={faPhoneVolume}
            text1="This fee covers all the documents management for phone and Internet subscriptions."
            price=" 100 "
          />
        </div>
      </section>
    </React.Fragment>
  );
}
