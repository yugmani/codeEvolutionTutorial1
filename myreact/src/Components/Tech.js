import React from "react";

function Tech({ tech }) {
  return (
    <div>
      <li>
        I paid ${tech.price} for my {tech.gadget}.
      </li>
    </div>
  );
}

export default Tech;
