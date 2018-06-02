import React, { Component } from "react";

class App extends Component {
  state = {
    inputValue: ""
  };

  changeInputState = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Form changeHandler={this.changeInputState} />
        <p>Input value: {this.state.inputValue}</p>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div>
        <OurInput changeHandler2={this.props.changeHandler} />
        <Button
          clickHandler={() => {
            console.log("hi");
          }}
          buttonName="Click Me!"
        />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler}>{this.props.buttonName}</button>
    );
  }
}
class OurInput extends Component {
  render() {
    return <input onChange={this.props.changeHandler2} />;
  }
}
export default App;

//          App

//          Form

//   Button     OurInput
