import React from "react";
import "./ProductList.css";

function ProductList({ img, title }) {
  return (
    <div className="product__list">
      <div className="pr__component">
        <div className="product">
          <img src={img} alt="" />
          <div className="product__desc">
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
