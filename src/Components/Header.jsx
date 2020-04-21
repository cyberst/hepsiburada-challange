import React from "react";
import "./Header.css";
import hepsiburadaLogo from "../Resources/Hepsiburada.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <Link to="/">
        <img src={hepsiburadaLogo} alt="logo" />
      </Link>
      <span className="Header-text">
        <span className="Header-text-bold">Link</span>
        <span className="Header-text-lighter">VOTE </span>
        Challenge
      </span>
      <hr />
    </div>
  );
}

export default Header;
