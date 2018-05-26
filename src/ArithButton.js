import React, { Component } from "react";

class ArithButton extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          border: "1px white solid",
          width: "50px",
          height: "50px"
        }}
      >
        {this.props.arith}
      </div>
    );
  }
}

export default ArithButton;
