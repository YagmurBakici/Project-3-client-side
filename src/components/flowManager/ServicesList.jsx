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

          <i className="">{service === "housing"}</i>
          <i className="">{service === "school"}</i>
          <i className="">{service === "bank"}</i>
          <i className="">{service === "insurance"}</i>
          <i className="">{service === "household-package"}</i>
        </li>
      ))}
    </ul>
  );
}
