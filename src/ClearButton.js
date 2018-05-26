import React, { Component } from "react";

class ClearButton extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px red solid",
          width: "150px",
          height: "50px"
        }}
      >
        Clear
      </div>
    );
  }
}

export default ClearButton;
