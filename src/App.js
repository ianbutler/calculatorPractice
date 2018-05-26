import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NumberButton from "./NumberButton";
import Display from "./Display";
import ClearButton from "./ClearButton";
import ArithButton from "./ArithButton";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div
          className="calculator-container"
          style={{ border: "1px solid black" }}
        >
          <Display />
          <ClearButton />
          {["+", "-", "/", "*"].map((symbol, index) => {
            return <ArithButton key={index} arith={symbol} />;
          })}

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((arrNum, index) => {
            return <NumberButton key={index} num={arrNum} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
