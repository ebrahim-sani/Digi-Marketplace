import React from "react";
import "./ProductList.css";

function ProductList({ img, title }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="product__list">
      <div className="pr__component">
        <div className="product">
          <img src={img} alt="img" />
          <div className="product__desc">
            <span>{truncate(title, 60)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
