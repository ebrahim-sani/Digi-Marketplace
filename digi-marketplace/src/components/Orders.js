import React from "react";
import ProductsOrder from "./inner-component/ProductsOrder";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders">
      <div className="order__component">
        <div className="order__header">
          <span>Software Name</span>
          <span>Your Email</span>
          <span className="payment__status">Payment Status</span>
          <span className="order_date">Order Date</span>
        </div>
        <div className="orders__detail">
          <ProductsOrder
            softwareName="Customer Tracker"
            customerEmail="customer@gmail.com"
            paymentStatus="Verified"
            orderDate="18-02-2021"
          />
          <ProductsOrder
            softwareName="Customer Tracker"
            customerEmail="customer@gmail.com"
            paymentStatus="Pending"
            orderDate="20-02-2021"
          />
          <ProductsOrder
            softwareName="Customer Tracker"
            customerEmail="customer@gmail.com"
            paymentStatus="Pending"
            orderDate="20-02-2021"
          />
          <ProductsOrder
            softwareName="Customer Tracker"
            customerEmail="customer@gmail.com"
            paymentStatus="Pending"
            orderDate="20-02-2021"
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
