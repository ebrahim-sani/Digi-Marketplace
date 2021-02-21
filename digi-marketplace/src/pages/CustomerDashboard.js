import React from "react";
import "./CustomerDashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";

function CustomerDashboard() {
  return (
    <div className="customer__dashboard">
      <div className="dashboard__component">
        <div className="customerD__sidebar">
          <Sidebar />
        </div>
        <div className="main__dashboard">
          <div className="customer__overview">
            <div className="overview__header">
              <DashboardHeader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
