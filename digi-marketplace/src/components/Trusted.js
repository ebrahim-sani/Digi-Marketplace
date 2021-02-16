import React from "react";
import "./Trusted.css";

require("react-dom");
window.React2 = require("react");

function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted__component">
        <h3>Trusted By</h3>
        <div className="companies__logo">
          <img src="/uber.png" alt="logo" />
          <img src="/wordpress.png" alt="logo" />
          <img src="fb.png" alt="logo" />
          <img src="/airbnb.png" alt="logo" />
          <img src="/ibm.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
