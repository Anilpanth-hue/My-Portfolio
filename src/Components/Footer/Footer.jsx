import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="footer-top">
        <div className="footer-top-right"></div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Anil Panth. All rights reserved.
        </p>
        <div className="fotter-bottom-right">
          <p className="fotter-bottom-right-one">Term of Services</p>
          <p className="fotter-bottom-right-one">Privacy Policy</p>
          <p className="fotter-bottom-right-one">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
