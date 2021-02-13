import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "@material-ui/core";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
function Header() {
  return (
    <div className="header">
      <div className="header__componentsOne">
        <div className="header__logo">
          <span>ROZZ</span>
        </div>
        <div className="search__field">
          <SearchIcon className="search__icon" />
          <input placeholder="search" type="text" />
        </div>
        <div className="card__icon">
          <CardGiftcardIcon />
          <p>Gift Card</p>
        </div>
        <a href="/">Shopping & Return</a>
        <Button variant="outlined">Sign in</Button>

        <div className="shopping__basket">
          <ShoppingBasketIcon />
          <span>0</span>
        </div>
      </div>
      <div className="header__componentsTwo">
        <div className="nav__links">
          <a href="/">New Products</a>
          <a href="/">Categories</a>
          <a href="/">Deals</a>
          <a href="/">Events</a>
          <a href="/">Sells</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
