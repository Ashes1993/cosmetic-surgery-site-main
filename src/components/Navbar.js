import React from "react";
import { Link } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <Link to={"/"} className="logo">
        <FaClinicMedical />
      </Link>
      <nav className="navbar">
        <Link to={"/"} className=" link">
          Home
        </Link>
        <Link to={"/surgeries"} className=" link">
          Surgeries
        </Link>
        <Link to={"/contact-us"} className=" link">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
