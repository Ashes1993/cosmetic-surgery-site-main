import React from "react";
import Navbar from "../components/Navbar";
import "./ContactUs.css";
import Header from "../components/UI/Header";

const ContactUs = () => {
  return (
    <section>
      <Navbar />
      <Header>Contact Us</Header>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Company Phones</h2>
          <p>Europe: +35 9876445582</p>
          <p>Iran: +98 9378196201</p>
        </div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default ContactUs;
