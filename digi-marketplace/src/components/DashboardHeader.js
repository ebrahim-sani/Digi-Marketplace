import React from "react";
import "../pages/CustomerDashboard.css";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import { useHistory } from "react-router-dom";

function DashboardHeader() {
  const history = useHistory();
  return (
    <div className="dashboard__header">
      <div className="header__icons">
        <h3>Dashboard</h3>
        <div className="header__icon">
          <SearchSharpIcon className="headerIcon" />
          <NotificationsActiveSharpIcon className="headerIcon" />
          <SettingsSharpIcon className="headerIcon" />
          <AccountCircleSharpIcon
            style={{ fontSize: 35, color: "#837ee0" }}
            className="headerIcon"
          />
        </div>
      </div>
      <div className="overview__header">
        <span onClick={() => history.push("/customer/dashboard/overview")}>
          Overview
        </span>
        <span onClick={() => history.push("/customer/dashboard/orders")}>
          Orders
        </span>
        <span onClick={() => history.push("/customer/dashboard/payments")}>
          Payment
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
