import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-details">
        <div className="footer-company">
          <h2>Med Travel Iran</h2>
          <p>Your gateway and trusted partner to cosmetic surgery in Iran.</p>
        </div>
        <div className="footer-contacts">
          <h3>Company Offices</h3>
          <p>Europe: +35 9876445582</p>
          <p>Iran: +98 9378196201</p>
        </div>
      </div>
      <div className="legal-links">
        <Link to={"/termsofuse"}>Terms of Use</Link>
        <Link to={"/privacypolicy"}>Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
