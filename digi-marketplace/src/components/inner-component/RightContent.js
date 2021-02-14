import React from "react";
import "./RightContent.css";

function RightContent({ img, head, desc }) {
  return (
    <div className="right_content">
      <div className="content_component">
        <img src={img} alt="icon" />
        <div className="little_desc">
          <h3>{head}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
