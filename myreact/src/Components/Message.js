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
    const { name, city } = this.props;
    return (
      <div>
        <h5>
          I am {name} from {city}
        </h5>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
