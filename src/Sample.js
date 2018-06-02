import React, { Component } from "react";

class App extends Component {
  state = {
    inputValue: "",
    clickNumber: 0
  };

  changeInputState = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Repeat these exercises a lot!</p>
        <p>
          Exercise 1: Delete different components and then rebuild them. Over
          and over again
        </p>
        <p>
          Exercise 2: Make the this.state.clickNumber increase everytime you
          click on the button.
        </p>
        <p>
          {" "}
          Exercise 3: Add your own changes and manipulate the components to help
          you understand the different pieces involved
        </p>
        <Form changeHandler={this.changeInputState} />
        <p>Input value: {this.state.inputValue}</p>
        <p>Click number: {this.state.clickNumber}</p>
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
