import React from "react";
import PaymentStatus from "./inner-component/PaymentStatus";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <div className="payment__component">
        <div className="payment_header">
          <h4>Payment History</h4>
        </div>
        <div className="detail_header">
          <span>Software Name</span>
          <span className="pym_sts">Payment Status</span>
          <span className="date">Date</span>
          <span className="act">Action</span>
        </div>
        <PaymentStatus
          software_Name="Cutomer Tracker"
          payment_Status="Approved"
          Date="18-02-2021"
        />
      </div>
    </div>
  );
}

export default Payment;
