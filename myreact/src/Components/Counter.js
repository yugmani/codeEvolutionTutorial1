import React, { Component } from "react";
import "./welcome.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: this.state.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: this.state.count - 1,
    }));
  }

  render() {
    return (
      <div className="counter-buttons">
        <button onClick={() => this.decrement()}>Decrement</button>
        <div className="count-counter">{this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
