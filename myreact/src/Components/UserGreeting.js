import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //Conditional render Using if ... else statement.
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Yoog</div>
    //     </div>
    //   );
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //Conditional render Using element variables approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Yoog</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //Conditional render using Ternary Operator
    return this.state.isLoggedIn ? (
      <div>Welcome Yoog</div>
    ) : (
      <div>Welcome Guest</div>
    );

    //Short-Circuit approach for conditional render
    // return this.state.isLoggedIn && <div>Welcome Yoog</div>;
  }
}

export default UserGreeting;
