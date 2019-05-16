import React from "react";

export default function ServicesList({ services, parentHandler }) {
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

          <i className="">{service === "housing" && "Service fee: 1200 €"}</i>
          <i className="">
            {service === "school" && "Service fee: 500 € per child"}
          </i>
          <i className="">{service === "bank" && "Service fee: 150 €"}</i>
          <i className="">{service === "insurance" && "Service fee: 200 €"}</i>
          <i className="">
            {service === "household-package" && "Service fee: 100 €"}
          </i>
        </li>
      ))}
    </ul>
  );
}
