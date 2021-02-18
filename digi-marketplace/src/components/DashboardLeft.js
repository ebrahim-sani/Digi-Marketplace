import React from "react";
import "./DashboardLeft.css";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";

function DashboardLeft({ name, num, growth }) {
  return (
    <div className="dashLeft">
      <div className="dashLeft__component">
        <h5>{name}</h5>
        <span>{num}</span>
        <p>
          <ArrowUpwardSharpIcon
            style={{
              color: "green",
              fontSize: 18,
            }}
          />
          {growth}
        </p>
      </div>
    </div>
  );
}

export default DashboardLeft;
