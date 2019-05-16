import { Component } from "react";

export default class Step extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  storeLocally(data) {
    console.log("store locally");
    console.log(Object.keys(this.state)[0]);
    const JSONKey = Object.keys(this.state)[0];
    // stockons les infos dans le store local (on pourra les récupérer même si user recharge ... )
    const JSONObject = JSON.stringify(this.state[JSONKey]);
    window.localStorage.setItem(JSONKey, JSONObject);
    console.log("this is saved in the local storage:", JSONKey, JSONObject);
  }

  componentWillUnmount() {
    console.log("unmount a STEP !!!! ----- %%%%% ");
    this.storeLocally();
  }

  componentDidMount() {
    // console.log("service component mounted !");
    const query = "step" + this.props.step;
    // console.log(query);
    var storage = window.localStorage.getItem(query);
    // console.log("storage now =>", storage);
    if (Boolean(storage)) {
      storage = JSON.parse(storage);
      const key = Object.keys(storage)[0];
      // console.log(key);
      this.setState({ [key]: storage }, () => {
        console.log("yata ?", this.state);
      });
    } else {
      console.log("no local storage yet");
    }
  }
}
