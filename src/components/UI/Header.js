import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="header-container">
      <h1>{children}</h1>
    </header>
  );
}

export default Header;
