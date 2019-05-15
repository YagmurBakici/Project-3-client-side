// import React, { Component } from "react";

// export default class Question extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: "",
//       bedrooms: 0,
//       bathrooms: 0,
//       balcony: "",
//       terrace: "",
//       garden: "",
//       parking: "",
//       handicapAccess: "",
//       petFriendly: "",
//       lifestyle: "",
//       rent: 0
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
//           <h1>Tell us your needs?</h1>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="type" className="label">
//               What type of housing are you looking for?
//             </label>
//             <select
//               type="string"
//               id="type"
//               name="type"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>house</option>
//               <option>apartment</option>
//             </select>
//             <label htmlFor="bedrooms" className="label">
//               How many bedrooms?
//             </label>
//             <select
//               type="number"
//               id="bedrooms"
//               name="bedrooms"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>1 +</option>
//               <option>2 +</option>
//               <option>3 +</option>
//               <option>4 +</option>
//               <option>5 +</option>
//             </select>
//             <label htmlFor="bathrooms" className="label">
//               How many bathrooms?
//             </label>
//             <select
//               type="number"
//               id="bathrooms"
//               name="bathrooms"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>1 +</option>
//               <option>2 +</option>
//               <option>3 +</option>
//               <option>4 +</option>
//               <option>5 +</option>
//             </select>

//             <label htmlFor="balcony" className="label">
//               Would you like to have a balcony?
//             </label>
//             <select
//               type="string"
//               id="balcony"
//               name="balcony"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="terrace" className="label">
//               Would you like to have a terrace?
//             </label>
//             <select
//               type="string"
//               id="terrace"
//               name="terrace"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="garden" className="label">
//               Would you like to have a garden?
//             </label>
//             <select
//               type="string"
//               id="garden"
//               name="garden"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="parking" className="label">
//               Would you need a parking?
//             </label>
//             <select
//               type="string"
//               id="parking"
//               name="parking"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="handicapAccess" className="label">
//               Would you need a handicap access?
//             </label>
//             <select
//               type="string"
//               id="handicapAccess"
//               name="handicapAccess"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="petFriendly" className="label">
//               Should it be pet friendly?
//             </label>
//             <select
//               type="string"
//               id="petFriendly"
//               name="petFriendly"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//             <label htmlFor="lifestyle" className="label">
//               What type of lifestyle are you looking for?
//             </label>
//             <select
//               type="string"
//               id="lifestyle"
//               name="lifestyle"
//               className="input"
//               onChange={this.handleChange}
//             >
//               <option value="" />
//               <option>family friendly</option>
//               <option>lively</option>
//               <option>young but calm</option>
//             </select>
//             <label htmlFor="rent" className="label">
//               What's your maximum monthly rent budget (€)?
//             </label>
//             <input
//               type="number"
//               id="rent"
//               name="rent"
//               className="input"
//               min="0"
//               onChange={this.handleChange}
//             />
//             <button>Next step</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
