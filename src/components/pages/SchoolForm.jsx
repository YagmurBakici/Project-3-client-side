// import React, { Component } from "react";
// import HousingForm from "./HousingForm";

// export default class Question extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       language: "",
//       schoolType: "",
//       level: ""
//     };
//   }

//   handleChange = e => {
//     const key = e.currentTarget.name;
//     const value = e.currentTarget.value;
//     this.setState({ [key]: value });
//     // console.log(this.state);
//   };
//   componentDidMount() {
//     console.log(this.props);
//   }

//   handleSubmit = evt => {
//     evt.preventDefault();

//     const housingInfosAsJSON = JSON.stringify(this.state);
//     console.log(housingInfosAsJSON);
//     window.localStorage.setItem("housingInfos", housingInfosAsJSON);
//     console.log("heeeeeeeeeeeere", this.props);
//     // window.location = "/allservices";
//     console.log(this.props);
//     // this.props.history.push("/");
//     // stocker dans le localStorage au fur et à mesure

//     console.log("submitteeeeed", this.state);
//   };

//   render() {
//     return (
//       <div className="Question">
//         {/* <p>{props.title}</p> */}
//         <div>
//           <h1>Tell us your school specifications</h1>
//           <h2>Children ...</h2>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="language" className="label">
//               Which language should the courses be in?
//             </label>
//             <select
//               type="string"
//               id="language"
//               name="language"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>French</option>
//               <option>English</option>
//               <option>Korean</option>
//             </select>
//             <label htmlFor="schoolType" className="label">
//               What school type are you looking for?
//             </label>
//             <select
//               type="string"
//               id="schoolType"
//               name="schoolType"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Private</option>
//               <option>Public</option>
//             </select>
//             <label htmlFor="level" className="label">
//               What's the child's level?
//             </label>
//             <select
//               type="string"
//               id="level"
//               name="level"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Preschool</option>
//               <option>Elementary school</option>
//               <option>Middle school</option>
//               <option>High school</option>
//             </select>
//             <button>Next step</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
