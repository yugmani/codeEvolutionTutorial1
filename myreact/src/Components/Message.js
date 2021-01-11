import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Please subscribe us!",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h5>
          I am {this.props.name} from {this.props.city}
        </h5>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
