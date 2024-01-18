import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h2>
          Pulse<span>.</span>
        </h2>
      </div>
      <div className="pages">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addPage">Add </NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </div>
      <div className="tel">
        <p>
          Reservations <span>652-345 3222 11</span>
        </p>
      </div>
      <div className="menu-bar">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
