import React from "react";
import "./Dashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import MoveToInboxSharpIcon from "@material-ui/icons/MoveToInboxSharp";
import QueueSharpIcon from "@material-ui/icons/QueueSharp";
import LocalOfferSharpIcon from "@material-ui/icons/LocalOfferSharp";
import GroupSharpIcon from "@material-ui/icons/GroupSharp";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import DashboardLeft from "../components/DashboardLeft";
import { Line } from "react-chartjs-2";
import TopSelling from "../components/TopSelling";
import Donut from "../lib/Donut";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const user = useSelector(selectUser);
  const history = useHistory();

  const lineChart = (
    <Line
      data={{
        labels: Date,
        datasets: [
          {
            data: [2, 5, 7, 9, 12, 5, 7, 9, 15, 18],
            borderColor: "#837ee0",
            fill: true,
          },
        ],
      }}
    />
  );
  return (
    <div className="dashboard">
      <div className="dashboard__component">
        <div className="siderbar">
          <div className="sidebar__logo">
            <h3>ROZZ</h3>
          </div>
          <div className="sidebar__items">
            <h4>Main</h4>
            <div className="item">
              <HomeIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <a href="/">Dashboard</a>
            </div>
            <div className="item">
              <MoveToInboxSharpIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <a href="/">Orders</a>
            </div>
            <div className="item">
              <QueueSharpIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <a href="/">Collection</a>
            </div>
            <div className="item">
              <LocalOfferSharpIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <span
                style={{
                  fontWeight: "550",
                  fontSize: "1rem",
                  paddingLeft: "10px",
                }}
                onClick={() => history.push("/vendor/add-product")}
              >
                + New Product
              </span>
            </div>
            <div className="item">
              <GroupSharpIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <a href="/">Customers</a>
            </div>
            <div className="item">
              <AccountBalanceSharpIcon
                style={{
                  color: "#837ee0",
                }}
              />
              <a href="/">Marketplace</a>
            </div>
          </div>
        </div>
        <div className="main__dashboard">
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
                  src={user?.photoURL}
                />
              </div>
            </div>
          </div>
          <div className="dashboard__info">
            <div className="left__component">
              <div className="content">
                <DashboardLeft name="Customers" num="43.00" growth="12%" />
                <DashboardLeft name="Orders" num="130.0" growth="20%" />
              </div>
              <div className="content">
                <DashboardLeft name="Earnings" num="$276.0" growth="31%" />
                <DashboardLeft name="Growth" num="+18.0%" growth="9%" />
              </div>
            </div>
            <div className="right__component">
              <div className="chart">{lineChart}</div>
            </div>
          </div>
          <div className="sales__info">
            <div className="top__selling">
              <div className="top__header">
                <h3>Top Selling Softwares</h3>
                <div className="export">
                  <h5>Export</h5>
                  <ArrowDownwardSharpIcon />
                </div>
              </div>
              <div className="top__subHeader">
                <h4>Software Name</h4>
                <h4>Date</h4>
                <h4>Price</h4>
                <h4 className="amount">Amount</h4>
              </div>
              <div className="sw__products">
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="225.99"
                  amount="1,733.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
                <TopSelling
                  name="Customer Tracker"
                  date="18-02-2021"
                  price="229.99"
                  amount="1,233.55"
                />
              </div>
            </div>

            <div className="total__sales">
              <div className="totalSales__header">
                <h3>Total Sales</h3>
              </div>
              <div className="donut__chart">
                <Donut className="donut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
