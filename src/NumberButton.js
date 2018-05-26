import React, { Component } from "react";

class NumberButton extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px red solid",
          width: "50px",
          height: "50px"
        }}
      >
        {this.props.num}
      </div>
    );
  }
}

export default NumberButton;
