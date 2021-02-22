import React from "react";
import "../pages/CustomerDashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import MoveToInboxSharpIcon from "@material-ui/icons/MoveToInboxSharp";
import EmailIcon from "@material-ui/icons/Email";
import LocalOfferSharpIcon from "@material-ui/icons/LocalOfferSharp";
import StorefrontIcon from "@material-ui/icons/Storefront";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

function Sidebar() {
  return (
    <div className="customerDashboard__sidebar">
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
          <a href="/">Home</a>
        </div>
        <div className="item">
          <EmailIcon
            style={{
              color: "#837ee0",
            }}
          />
          <a href="/#">Inbox</a>
        </div>
        <div className="item">
          <MoveToInboxSharpIcon
            style={{
              color: "#837ee0",
            }}
          />
          <a href="/#">My Orders</a>
        </div>
        <div className="item">
          <LocalOfferSharpIcon
            style={{
              color: "#837ee0",
            }}
          />
          <a href="/#">Products</a>
        </div>
        <div className="item">
          <MonetizationOnIcon
            style={{
              color: "#837ee0",
            }}
          />
          <a href="/#">Payment</a>
        </div>
        <div className="item">
          <StorefrontIcon
            style={{
              color: "#837ee0",
            }}
          />
          <a href="/#">Marketplace</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
