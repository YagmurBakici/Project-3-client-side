import React, { Component } from "react";
import { getUserProfil, editUser } from "../../API/UserApi";

class EditProfil extends Component {
  state = {
    feebackUser: null,
    firstName: "",
    lastName: "",
    mail: ""
  };

  componentDidMount = () => {
    console.log("mount");
    this.setState({
      firstName: this.props.userProfil.firstName,
      lastName: this.props.userProfil.lastName,
      mail: this.props.userProfil.mail
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const mail = this.state.mail;
    console.log("JE marche !");
    editUser(this.props.userProfil.id, { firstName, lastName, mail })
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
    console.log(this.props.userProfil.firstName);
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default EditProfil;
