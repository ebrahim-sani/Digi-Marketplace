import { Button } from "@material-ui/core";
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero__component">
        <div className="left__hero">
          <h1>
            Last-Day Gift Guide <span>UP TO 60% OFF</span>
          </h1>
          <p>
            Find the best Sales Tax Software for your business. Compare product
            reviews and features to build your list. <br /> <br /> Note: You are
            in last day away from getting gift after purchasing different
            product in different categories.
          </p>
          <div className="hero__btn">
            <Button
              variant="outlined"
              color="primary"
              style={{
                height: 56,
                borderRadius: 10,
              }}
            >
              Explore Products
            </Button>
          </div>
        </div>
        <div className="right__hero">
          <img src="/undraw_svg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
