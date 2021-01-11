import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <div>
        <h3>This is the Greeting from {this.props.compo} Component!</h3>
      </div>
    );
  }
}

export default Greet;
