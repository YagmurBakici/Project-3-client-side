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

  componentDidMount() {
    console.log("ici");

    const possibleKeys = [
      "userInfos",
      "housingInfos",
      "schoolInfos",
      "bankInfos",
      "insuranceInfos",
      "communicationInfos"
    ];
    const services = {};

    possibleKeys.forEach(key => {
      var check = window.localStorage.getItem(key);
      if (check) {
        services[key] = JSON.parse(check);
      }
    });

    for (let key in services) {
      console.log(key, services[key]);
      this.setState({ [key]: services[key] });
    }
    // this.setState({ services: services }, () => {
    //   console.log("previous infos in localstorage", this.state);
    // });
  }

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
        <h1 className="ptitle">YOUR PROFILE</h1>
        <div className="prof">
          <h2 className="profile-title">YOUR SERVICES PREFERENCES</h2>
          <h3 className="h3">User information</h3>
          {/* <div> {JSON.parse(window.localStorage.getItem("userInfos"))}</div> */}
          <ul>
            {this.state.userInfos && (
              <React.Fragment>
                <li className="li-element">
                  Destination city: {this.state.userInfos.city}
                </li>
                <li className="li-element">
                  Number of adults moving: {this.state.userInfos.nbAdults}
                </li>
                <li className="li-element">
                  Number of children moving: {this.state.userInfos.nbChildren}
                </li>
                <li className="li-element">
                  Date of arrival: {this.state.userInfos.arrivalDate}
                </li>
              </React.Fragment>
            )}
          </ul>
          <br />
          <h3 className="h3">Housing preferences</h3>
          <ul>
            {this.state.housingInfos && (
              <React.Fragment>
                <li className="li-element">
                  Number of bathrooms: {this.state.housingInfos.bathrooms}
                </li>
                <li className="li-element">
                  Number of bedrooms: {this.state.housingInfos.bedrooms}
                </li>
                <li className="li-element">
                  Housing type: {this.state.housingInfos.housingType}
                </li>
                <li className="li-element">
                  Lifestyle: {this.state.housingInfos.lifestyle}
                </li>
                Amenities:
                <br />{" "}
                <li className="li-element">
                  Balcony :{" "}
                  {Boolean(this.state.housingInfos.balcony).toString()}
                </li>
                <li className="li-element">
                  Terrace: {Boolean(this.state.housingInfos.terrace).toString()}
                </li>
                <li className="li-element">
                  Garden: {Boolean(this.state.housingInfos.garden).toString()}
                </li>
                <li className="li-element">
                  Parking: {Boolean(this.state.housingInfos.parking).toString()}
                </li>
                <li className="li-element">
                  Handicap access:{" "}
                  {Boolean(this.state.housingInfos.handicapAccess).toString()}
                </li>
                <li className="li-element">
                  Pet friendly:{" "}
                  {Boolean(this.state.housingInfos.petFriendly).toString()}
                </li>
                <li className="li-element">
                  Maximum monthly rent:{" "}
                  {Boolean(this.state.housingInfos.monthlyRent).toString()}
                </li>
              </React.Fragment>
            )}
          </ul>
          <br />
          <h3 className="h3">School preferences</h3>
          {this.state.schoolInfos &&
            this.state.schoolInfos.map((info, index) => (
              <ul key={index}>
                {" "}
                Children {index + 1}:
                <li className="li-element">
                  Language: {info.language || "no level set yet"}
                </li>
                <li className="li-element">
                  School type: {info.schoolType || "no level set yet"}
                </li>{" "}
                <li className="li-element">
                  Level: {info.level || "no level set yet"}
                </li>
              </ul>
            ))}
          <br />
          <h3 className="h3">Bank need</h3>
          <ul>
            {this.state.bankInfos && (
              <React.Fragment>
                <li className="li-element">
                  Need: {this.state.bankInfos.need}
                </li>
              </React.Fragment>
            )}
          </ul>
          <br />
          <h3 className="h3">Insurance need</h3>
          <ul>
            {this.state.insuranceInfos && (
              <React.Fragment>
                <li className="li-element">
                  Need: {this.state.insuranceInfos.need}
                </li>
              </React.Fragment>
            )}
          </ul>
          <br />
          <h3 className="h3">Household package need</h3>
          <ul>
            {this.state.communicationInfos && (
              <React.Fragment>
                <li className="li-element">
                  Need: {this.state.communicationInfos.need}
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
        <div className="prof">
          <h2 className="profile-title">MANDATORY DOCUMENTS CHECKLIST</h2>
          <Checkbox tickColor="blue" /> Passport (copy of all pages) <br />
          <Checkbox /> ID <br />
          <Checkbox />5 photos of each family member <br />
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
