import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("You clicked FUNCTION!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Test Click</button>
    </div>
  );
}

export default FunctionClick;
