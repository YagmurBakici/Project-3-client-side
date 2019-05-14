import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact">
      <div className="field">
        <label className="label">Your Name:</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Username"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>

      <div className="field">
        <label className="label">Email: </label>
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </p>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Subject</option>
              <option>Logement</option>
              <option>Bank</option>
              <option>Assurence</option>
              <option>General Question</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message: </label>
        <div className="control">
          <textarea className="textarea" placeholder="Your text" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <p>
            <strong>You are already a client?</strong>{" "}
          </p>
          <label className="radio">
            <input type="radio" name="question" />
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </div>
  );
}
