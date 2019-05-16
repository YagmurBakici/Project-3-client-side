import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      email: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  openModal() {
    if (this.state.email) {
      this.setState({
        visible: true
      });
    } else {
      console.log("you shouldnt work");
    }
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section className="form_Container">
        <div className="contact">
          <h1 className="log_Title">Contact us</h1>
          <div className="form_field">
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
          </div>

          <div className="form_field">
            <label className="label">Email: </label>
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.onChange}
                required
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>

          <div className="form_field">
            <label className="label">Subject:</label>
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

          <div className="form_field">
            <label className="label">Message: </label>
            <div className="control">
              <textarea className="textarea" placeholder="Your text" />
            </div>
          </div>

          <div className="form_field">
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

          <div className="field is-grouped send_btn">
            <div className="control">
              <input
                className="button is-link"
                type="button"
                value="Send"
                onClick={() => this.openModal()}
              />
              <Modal
                email={this.state.email}
                visible={this.state.visible}
                width="300"
                height="100"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
              >
                <div>
                  <h1>
                    Your email is sent! <br /> Thank you!
                  </h1>

                  <a
                    //this href is to close the modal!
                    href="javascript:void(0);"
                    onClick={() => this.closeModal()}
                  >
                    Close
                  </a>
                </div>
              </Modal>

              {/* <button className="button is-link">Submit</button> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
