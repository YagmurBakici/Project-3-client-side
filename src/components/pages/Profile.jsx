import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Checkbox from "react-simple-checkbox";
import DnD from "../partials/DnD";
import "./Profile.css";
import { getUserProfil, editUser } from "../../API/UserApi";

export default class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("super props ",props)
  //   console.log("props role",props.user.role)
  // }
  state = {
    fileList: [],
    myProfil: {},
    feebackUser: null,
    firstName: "",
    lastName: "",
    mail: ""
  };

  handleDnd = fileList => {
    this.setState({ fileList });
  };

  componentDidMount = () => {
    getUserProfil(this.props.user._id)
      .then(userInfos => {
        console.log("LOL0", userInfos);
        this.setState({
          myProfil: userInfos.data,
          firstName: userInfos.data.firstName,
          lastName: userInfos.data.lastName,
          mail: userInfos.data.mail
        });
      })
      .catch(err => console.log(err));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const mail = this.state.mail;
    console.log("JE marche !");
    editUser(this.state.myProfil._id, { firstName, lastName, mail })
      .then(res => {
        console.log("GOOD", res);
        this.setState({
          feedbackUser: "Modified Successfully"
        });
      })
      .catch(error => console.log(error));
  };

  handleInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { feedbackUser, firstName, lastName, mail } = this.state;
    console.log("______", this.state.myProfil);
    return (
      <div className="profile">
        <div className="prof">
          <h1 className="ptitle">PROFILE</h1>
          <Checkbox tickColor="blue" /> Passport (copy of all pages) <br />
          <Checkbox /> ID <br />
          <Checkbox />5 Photos <br />
          <Checkbox /> Last tax declaration <br />
          <Checkbox />
          Signed employment contract or offer letter from your future employer{" "}
          <br />
          <Checkbox />
          Proof of old address: an electricity, gas, water or landline bill, or
          a declaration that you are being housed free of charge signed by the
          person providing you with accommodation, together with a copy of one
          of their bills and their photo ID. <br />
          <Checkbox /> Three most recent bank statements <br />
          <Checkbox /> Foreign tax identification number <br />
          <Checkbox /> Certificate of Eligibility <br />
          <Checkbox />
          Three most recent bank statements <br />
        </div>
        <div className="documents-drop">
          <DnD handleDnd={this.handleDnd} />
          {this.state.fileList.length > 0 ? (
            <div className="documents-attached">
              {/* {this.props.user.role === "admin" && <Link to="/admin">go to admin panel</Link>} */}
              {/* {if(!this.state.fileList){
             style ={display="none"}
            }} */}
              {this.state.fileList.map((file, index) => (
                <p key={index}>{file}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="form_Container">
          <form className="form " onSubmit={this.handleSubmit}>
            <h1 className="sign_Title">EDIT PROFIL</h1>
            <h1 style={{ color: "green", textAlign: "center" }}>
              {feedbackUser}
            </h1>
            <div className="form_field">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                className="input"
                name="firstName"
                value={firstName}
                onChange={this.handleInput}
              />
            </div>

            <div className="form_field">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                name="lastName"
                value={lastName}
                onChange={this.handleInput}
              />
            </div>

            <div className="form_field">
              <label className="label" htmlFor="mail">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="mail"
                value={mail}
                onChange={this.handleInput}
              />
            </div>
            <button className="input_send button is-link auth_btn">
              Modify my profil
            </button>
          </form>
        </div>
      </div>
    );
  }
}
