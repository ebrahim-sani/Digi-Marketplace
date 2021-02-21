import React from "react";
import "./ProductsOrder.css";

function ProductsOrder({
  softwareName,
  paymentStatus,
  customerEmail,
  orderDate,
}) {
  return (
    <div className="product__orders">
      <div className="order__details">
        <span className="sw_name">{softwareName}</span>
        <span className="ce_name">{customerEmail}</span>
        <span className="payment_status">{paymentStatus}</span>
        <span className="orderDate">{orderDate}</span>
      </div>
    </div>
  );
}

export default ProductsOrder;
