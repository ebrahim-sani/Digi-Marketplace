import React from "react";
import "./Header.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
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
          <div className="market__place">
            <a href="/#">Marketplace</a>
          </div>
          <div className="gift__icon">
            <CardGiftcardIcon />
            <span>Gift Card</span>
          </div>
          <Button
            onClick={() => history.push("/customer/login")}
            variant="outlined"
            color="primary"
          >
            Sign in
          </Button>
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
