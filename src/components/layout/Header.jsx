import React from 'react';
import "../../styles/Header.css";

export function Header() {
  return (
    <header className="header-container">
      {/* Home link targets the top of the page */}
      <a href="#" className="nav-link">
        Home
      </a>

      {/* Navigation group on the right */}
      <nav className="nav-group">
        <a href="#case-studies" className="nav-link">
          Case studies
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
}