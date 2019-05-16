import React from "react";
import Step from "./Step";

/**
 * @return Array
 */
function getNbChildren() {
  const nbChildren = Number(
    JSON.parse(window.localStorage.getItem("userInfos")).nbChildren
  ); // je récupère du local storage le nombre d'enfants déclaré par le user
  const array = [...Array(nbChildren).keys()]; // je fais un array [0,1,... jusqu'au nombre d'enfants]
  return array;
}
function getLanguages() {
  return ["French", "English", "Korean"];
}
function getSchoolTypes() {
  return ["Private", "Public"];
}
function getLevels() {
  return ["Preschool", "Elementary school", "Middle school", "High school"];
}
function getBaseChildInfos(length) {
  function ChildInfos() {
    this.language = "";
    this.schoolType = "";
    this.level = "";
    this.serviceFee = 500;
  }
  const arr = [];
  for (let index = 0; index < length; index++) {
    arr.push(new ChildInfos());
  }
  console.log("arr", arr);
  return arr;
}

export default class ServiceSchool extends Step {
  constructor(props) {
    super(props);
    this.state = {
      schoolInfos: []
    };
  }

  componentDidMount() {
    const nb = getNbChildren().length;
    console.log("mounted... nb ?", nb);
    const baseInfos = getBaseChildInfos(nb);
    this.setState({ schoolInfos: baseInfos }, () => {
      console.log(this.state.schoolInfos);
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.setSchoolInfos(this.state);
    // this.setState({
    //   [evt.target.language]: "",
    //   [evt.target.schoolType]: "",
    //   [evt.target.level]: ""
    // });
  };

  handleChange = evt => {
    const { schoolInfos } = this.state;
    schoolInfos[evt.target.name] = evt.target.value;
    const currentChildIndex = Number(
      evt.currentTarget.parentElement.getAttribute("data-child-index")
    );
    const schoolInfosCopy = this.state.schoolInfos;
    schoolInfosCopy[currentChildIndex][evt.target.name] = evt.target.value;
    console.log(schoolInfosCopy);
    this.setState({ schoolInfos: schoolInfosCopy }, () => {
      console.log(
        "school object just was just changed:",
        this.state.schoolInfos
      );
    });
  };

  render() {
    return (
      <form className="service-form" onSubmit={this.handleSubmit}>
        <h2 className="title">School infos</h2>
        {getNbChildren().map((nbChildren, key) => (
          <div data-child-index={key} key={key}>
            <h3>Children {key + 1}</h3>
            <label htmlFor="language" className="label">
              Which language should the courses be in?
            </label>
            <select
              type="string"
              id="language"
              name="language"
              className="input"
              onChange={this.handleChange}
            >
              <option value="" />
              {getLanguages().map((language, key) => (
                <React.Fragment key={key}>
                  {" "}
                  <option>{language}</option>
                </React.Fragment>
              ))}
            </select>
            <label htmlFor="schoolType" className="label">
              What school type are you looking for?
            </label>
            <select
              type="string"
              id="schoolType"
              name="schoolType"
              className="input"
              onChange={this.handleChange}
            >
              <option value="" />
              {getSchoolTypes().map((schoolType, key) => (
                <React.Fragment key={key}>
                  {" "}
                  <option>{schoolType}</option>
                </React.Fragment>
              ))}
            </select>
            <label htmlFor="level" className="label">
              What's the child's level?
            </label>
            <select
              type="string"
              id="level"
              name="level"
              className="input"
              onChange={this.handleChange}
            >
              <option value="" />
              {getLevels().map((level, key) => (
                <React.Fragment key={key}>
                  {" "}
                  <option>{level}</option>
                </React.Fragment>
              ))}
            </select>
          </div>
        ))}
        <button>Save and choose another service</button>{" "}
      </form>
    );
  }
}
