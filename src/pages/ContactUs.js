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
        <div className="contact-info"></div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default ContactUs;
