import React, { Component } from "react";
// import "./Dnd.css";
class DnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: false,
      fileList: []
    };
  }

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("droppıng", e.dataTransfer.files);
    const files = Array.from(e.dataTransfer.files);
    console.log(files);
    const fileList = [];
    files.forEach(file => fileList.push(file.name));
    this.props.handleDnd(fileList);

    this.setState({ fileList: fileList });
    this.setState({ drag: false });
    // if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    //   this.handleDrop(e.dataTransfer.files);
    //   e.dataTransfer.clearData();
    //   this.dragCounter = 0;
    // }

    return false;
  };

  dropRef = React.createRef();

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = e => {
    console.log("drag in");

    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  };

  handleDragOut = e => {
    console.log("drag out");

    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ drag: false });
    }
  };

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }
  render() {
    console.log(this.props);

    return (
      <div
        className="dnd"
        style={{
          display: "inline-block",
          border: "2px #55c9d8 solid",
          padding: "100px",
          position: "relative"
        }}
        ref={this.dropRef}
      >
        {this.state.dragging && (
          <div
            style={{
              border: "dashed grey 4px",
              backgroundColor: "rgba(255,255,255,.8)",

              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                left: 0,
                textAlign: "center",
                color: "grey",
                fontSize: 36
              }}
            />
          </div>
        )}
        {this.props.children}
        <strong className="drop">Drag and Drop your documents here:</strong>
      </div>
    );
  }
}

export default DnD;
