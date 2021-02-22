import React from "react";
import "./Overview.css";

function Overview() {
  return (
    <div className="customer_overview">
      <div className="overview_component">
        <div className="customer___overview">
          <h3>Profile</h3>
          <div className="personal__details">
            <div className="customer___name">
              <p>Name</p>
              <span>Ebrahim Sani</span>
            </div>

            <div className="customer___name">
              <p>Tagline</p>
              <span>React Developer</span>
            </div>
            <div className="customer___name">
              <p>Email</p>
              <span>ibraheemsani035@gmail.com</span>
            </div>
            <div className="customer___name">
              <p>Business</p>
              <span>CEO at ROZZ</span>
            </div>
            <div className="customer___name">
              <p>Country</p>
              <span>Nigeria</span>
            </div>
          </div>
        </div>

        <div className="customer___details">
          <div className="payment___history">
            <div className="customer___name">
              <p>Spent</p>
              <span className="spent">$1,344.55</span>
            </div>
            <div className="customer___name">
              <p>Pending</p>
              <span className="spent">269.88</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
