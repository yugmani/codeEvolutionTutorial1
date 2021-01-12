import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    alert("You have clicked CLASS!");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
