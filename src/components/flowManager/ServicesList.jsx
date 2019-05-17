import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCarCrash,
  faGraduationCap,
  faPiggyBank,
  faPhoneVolume,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesList({ services, parentHandler }) {
  console.log(services);

  // let myIcons = "";
  // let myFees = "";
  // for (let i = 0; i < services.length; i++) {
  //   if (services[i] === "HOUSING") {
  //     myIcons = <FontAwesomeIcon icon={faEnvelope} />;
  //     myFees = <p>Service fee: 1200 €</p>;
  //   } else {
  //     myIcons = <p>hello</p>;
  //     myFees = <p>hello</p>;
  //   }
  // }
  // console.log("list", services)
  return (
    <ul className="list container-services">
      {services.map((service, index) => (
        <li
          href="#down"
          className="servicesBtn"
          key={index}
          onClick={() => parentHandler(service)}
        >
          {service.toUpperCase().replace(/-/g, " ")}
          <br />
          <br />
          {service === "basic-user-infos" ? (
            <div>
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
          ) : null}
          {service === "housing" ? (
            <div>
              <FontAwesomeIcon icon={faHome} />
            </div>
          ) : null}

          {service === "school" ? (
            <div>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
          ) : null}
          {service === "bank" ? (
            <div>
              <FontAwesomeIcon icon={faPiggyBank} />
            </div>
          ) : null}

          {service === "insurance" ? (
            <div>
              <FontAwesomeIcon icon={faCarCrash} />
            </div>
          ) : null}
          {service === "household-package" ? (
            <div>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
          ) : null}
          {/* //old version: */}
          {/* <i className="">{service === "housing" && "Service fee: 1200 €"}</i>
          <i className="">
            {service === "school" && "Service fee: 500 € per child"}
          </i>
          <i className="">{service === "bank" && "Service fee: 150 €"}</i>
          <i className="">{service === "insurance" && "Service fee: 200 €"}</i>
          <i className="">
            {service === "household-package" && "Service fee: 100 €"}
          </i> */}
        </li>
      ))}
    </ul>
  );
}
