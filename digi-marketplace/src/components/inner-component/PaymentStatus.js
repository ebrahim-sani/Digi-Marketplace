import React from "react";
import "./PaymentStatus.css";

function PaymentStatus({ software_Name, payment_Status, Date }) {
  return (
    <div className="paymentStatus">
      <div className="status__component">
        <span className="s_name">{software_Name}</span>
        <span className="s_status">{payment_Status}</span>
        <span className="s_date">{Date}</span>
        <div className="action">
          <span>View</span>
          <span>Download</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentStatus;
