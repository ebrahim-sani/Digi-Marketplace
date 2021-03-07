import React from "react";
import "./Header.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__component">
        <div className="component__one">
          <div className="mobile__header">
            <h3 style={{ fontSize: "30px", color: "#837ee0" }}>ROZZ</h3>
            <IconButton>
              <MenuIcon style={{ fontSize: "45px" }} />
            </IconButton>
          </div>
          <div className="component__one__content">
            <div className="header__logo">
              <span onClick={() => history.push("/")}>ROZZ</span>
            </div>
            <div className="search__field">
              <SearchIcon className="search__icon" />
              <input type="text" placeholder="search" />
            </div>
            <div className="market__place">
              <span onClick={() => history.push("/marketplace")}>
                Marketplace
              </span>
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
