import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // Official React Event Binding Approach
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   }

  // Final Approach with arrow function in the class
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Error without Binding:  */}
        <button onClick={this.clickHandler}>Click here</button>
        {/* First Approach: Event Binding in jsx */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click here</button> */}
        {/* Arrow Function Approach: Event Binding in jsx */}
        {/* <button onClick={() => this.clickHandler()}>Click here</button> */}
      </div>
    );
  }
}

export default EventBinding;
