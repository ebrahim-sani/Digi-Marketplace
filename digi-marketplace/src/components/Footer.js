import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__component">
        <div className="footer__content">
          <h4>About Rozz</h4>
          <div className="footer__childrens">
            <a href="/">News</a>
            <a href="/">Careers</a>
            <a href="/">Story</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
        <div className="footer__content">
          <h4>For Customers</h4>
          <div className="footer__childrens">
            <a href="/">Categories</a>
            <a href="/">Blog</a>
            <a href="/">Products Review</a>
            <a href="/">FAQs</a>
          </div>
        </div>
        <div className="footer__content">
          <h4>For Vendors</h4>
          <div className="footer__childrens">
            <a href="/">Program Overview</a>
            <a href="/">Advertise With Us</a>
            <a href="/">Testimonials</a>
            <a href="/">Vendow Login</a>
          </div>
        </div>
        <div className="footer__content">
          <h4>Contact Us</h4>
          <div className="footer__childrens">
            <span>Rozz Inc</span>
            <span>222 LGB</span>
            <span>Abuja</span>
            <a href="/">Email Us</a>
          </div>
        </div>
      </div>
      <div className="social__icons">
        <LinkedInIcon
          style={{
            fontSize: 30,
          }}
          className="icon"
        />
        <FacebookIcon
          style={{
            fontSize: 30,
          }}
          className="icon"
        />
        <YouTubeIcon
          style={{
            fontSize: 30,
          }}
          className="icon"
        />
        <TwitterIcon
          style={{
            fontSize: 30,
          }}
          className="icon"
        />
      </div>
      <div className="copyright__section">
        <h5>ROZZ &copy; 2021</h5>
      </div>
    </div>
  );
}

export default Footer;
