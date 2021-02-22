import React from "react";
import "./Software.css";

function Software({ cover_img, sw_name, desc }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <div className="software">
        <div className="component">
          <img src={cover_img} alt="cover_image" />
          <span>{truncate(sw_name, 70)}</span>
        </div>
      </div>
    </div>
  );
}

export default Software;
