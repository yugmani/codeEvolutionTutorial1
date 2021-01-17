import React from "react";
import Tech from "./Tech";

function NameList() {
  //   const names = ["Dell", "HP", "Lenovo", "Toshiba", "Mac"];

  //   const nameList = names.map((name) => <h2>{name}</h2>);
  const gadgets = [
    { id: 1, gadget: "Dell", price: "800" },
    { id: 2, gadget: "HP", price: "700" },
    { id: 3, gadget: "Lenovo", price: "750" },
    { id: 4, gadget: "Toshiba", price: "690" },
    { id: 5, gadget: "Mac", price: "1200" },
  ];

  const techList = gadgets.map((tech) => <Tech key={tech.id} tech={tech} />);

  return (
    <div>
      <ul className="list-items">{techList}</ul>
      {/* {nameList} */}
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2>
      <h2>{names[4]}</h2> */}
    </div>
  );
}

export default NameList;
