import React from "react";
import Message from "./Message";
import "./welcome.css";

function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome to the {props.compo} Component!</h1>
      {props.children}
      <Message name="Yoog" city="Los Angeles" />
    </div>
  );
}

export default Welcome;
