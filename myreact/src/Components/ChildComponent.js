import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("sons & daughters")}>
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
