import React from "react";
import "./ExploreCard.css";

function ExploreCard({ img, head, desc }) {
  return (
    <div className="explore">
      <div className="explore_component">
        <img src={img} alt="" />
        <h3>{head}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
