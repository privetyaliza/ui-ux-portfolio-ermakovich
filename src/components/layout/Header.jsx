import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  // 1. Helper Function: Handles scrolling even if URL is "stuck"
  const handleScroll = (id) => {
    // Only run this manual scroll if we are ALREADY on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        // Wait tiny bit for safety, then scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    // If we are on another page (like /harvest), do nothing here.
    // The <Link> will take us to Home, and ScrollManager will handle the rest.
  };

  // 2. Helper for Home button
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <Link 
        to="/" 
        className="nav-link" 
        onClick={handleHomeClick}
      >
        Home
      </Link>

      <nav className="nav-group">
        {/* 3. Add onClick to manually trigger scroll */}
        <Link 
          to="/#case-studies" 
          className="nav-link"
          onClick={() => handleScroll('case-studies')} 
        >
          Case studies
        </Link>
        
        <Link 
          to="/#contact" 
          className="nav-link"
          onClick={() => handleScroll('contact')}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}