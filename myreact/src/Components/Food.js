import React, { Component } from "react";
import Counter from "./Counter";
class Food extends Component {
  render() {
    return (
      <div>
        <p>{this.props.food} </p>
        <Counter />
      </div>
    );
  }
}

export default Food;
