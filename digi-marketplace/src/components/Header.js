import React from "react";
import "./Header.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

require("react-dom");
window.React2 = require("react");

function Header() {
  return (
    <div className="header">
      <div className="header__component">
        <div className="component__one">
          <div className="header__logo">
            <span>ROZZ</span>
          </div>
          <div className="search__field">
            <SearchIcon className="search__icon" />
            <input type="text" placeholder="search" />
          </div>
          <div className="gift__icon">
            <CardGiftcardIcon />
            <span>Gift Card</span>
          </div>
          <Button variant="outlined" color="primary">
            Sign in
          </Button>
          <div className="checkout__basket">
            <ShoppingCartIcon />
            <span>0</span>
          </div>
        </div>
        <div className="component__two">
          <div className="nav__links">
            <a href="/">New Product</a>
            <a href="/">Categories</a>
            <a href="/">Sales</a>
            <a href="/">Event</a>
            <a href="/">Prime</a>
            <a href="/">About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
