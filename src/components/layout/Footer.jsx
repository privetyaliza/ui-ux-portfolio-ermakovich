import React from 'react';
import "../../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      {/* Left side: Get in touch */}
      <div>
        Get in touch →
      </div>

      {/* Right side: Email and LinkedIn */}
      <nav className="nav-group">
        <a href="mailto:your.email@example.com" className="nav-link">
          Email
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}