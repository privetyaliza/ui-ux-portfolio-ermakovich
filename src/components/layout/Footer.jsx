import React from 'react';

export function Footer() {
  return (
    <footer className="footer-container" id="contact">
      {/* Left side: Get in touch */}
      <div>
        Get in touch →
      </div>

      {/* Right side: Email and LinkedIn */}
      <nav className="nav-group">
        <a href="mailto:elizaveta.a.ermakovich@gmail.com" className="nav-link">
          Email
        </a>
        <a 
          href="https://www.linkedin.com/in/elizaveta-ermakovich/" 
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