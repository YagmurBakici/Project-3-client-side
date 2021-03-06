import React from "react";
import "./Fees.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OneFee = ({ name, price, text1, text2, text3, icon }) => {
  return (
    <div>
      <section className="first">
        <div className="row">
          <div className="col-sm-6 col-md-6" type="container">
            <div className="second">
              <h3 type="text">
                <FontAwesomeIcon className="testcolor" icon={icon} /> {name}
              </h3>
              <div className="second-text" type="html">
                <p>{text1}</p>{" "}
                <ul>
                  {text2 && <li>{text2}</li>}
                  {text3 && <li>{text3}</li>}
                </ul>
              </div>
              <br />
              <div className="third">
                {name === "Housing" && (
                  <p className="fee_paragraph" type="text">Service fee per {name}:</p>
                )}
                {name === "Bank" && <p className="fee_paragraph" type="text">Service fee per {name}:</p>}
                {name === "Insurance" && (
                  <p className="fee_paragraph" type="text">Service fee per {name}:</p>
                )}
                {name === "Household Package" && (
                  <p className="fee_paragraph" type="text">Service fee per {name}:</p>
                )}
                {name === "School" && <p className="fee_paragraph" type="text">Service fee per child:</p>}
                {/* {name === "Bank" && <p type="text">Service fee per child:</p>} */}
                <p>
                  <span className="fee_paragraph currency-unit" type="text">
                    €
                  </span>
                  <span className="currency-amount" type="text">
                    {price}
                  </span>
                  <span className="fee_paragraph currency-text" type="text">
                    (all taxes included)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OneFee;
