import React, { useState } from "react";
import "../assets/style/style.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="mjv-navbar">
      <div className="mjv-container">

        {/* Logo */}
        <a href="#home" className="mjv-logo" onClick={closeMenu}>
          <span className="mjv-logo-icon"></span>
          <span>
            <strong>MJV SWEETS</strong>
            <small>Sweetness of Tradition</small>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mjv-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        {/* Navigation Links */}
        <div className={`mjv-menu ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#sweets" onClick={closeMenu}>Sweets</a>
          <a href="#snacks" onClick={closeMenu}>Snacks</a>
          <a href="#offers" onClick={closeMenu}>Diwali Offers</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#offers"
            className="mjv-order-btn"
            onClick={closeMenu}
          >
            Order Now <i className="bi bi-arrow-right"></i>
          </a>
        </div>

      </div>
    </nav>
  );
}