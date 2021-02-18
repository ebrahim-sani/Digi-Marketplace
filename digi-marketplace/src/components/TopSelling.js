import React from "react";
import "./TopSelling.css";

function TopSelling({ name, date, price, amount }) {
  return (
    <div className="top__software">
      <span>{name}</span>
      <span>{date}</span>
      <span>${price}</span>
      <span>{amount}</span>
    </div>
  );
}

export default TopSelling;
