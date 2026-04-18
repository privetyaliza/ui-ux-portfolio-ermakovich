import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // 3. Handle Case Studies button click
  const handleCaseStudiesClick = () => {
    if (isDropdownOpen) {
      // If dropdown is open, close it and navigate to case studies section
      setIsDropdownOpen(false);
      if (location.pathname === '/') {
        handleScroll('case-studies');
      } else {
        navigate('/#case-studies');
      }
    } else {
      // If dropdown is closed, open it
      setIsDropdownOpen(true);
    }
  };

  // 4. Close dropdown when navigating
  const handleCaseStudyClick = () => {
    setIsDropdownOpen(false);
  };

  // 5. Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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
        {/* Case Studies Dropdown */}
        <div className="dropdown-container" ref={dropdownRef}>
          <button 
            className="nav-link dropdown-trigger"
            onClick={handleCaseStudiesClick}
            aria-expanded={isDropdownOpen}
            aria-label="Case studies menu"
          >
            Case studies
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link 
                to="/harvest" 
                className="dropdown-item"
                onClick={handleCaseStudyClick}
              >
                Harvest
              </Link>
              {/* <Link 
                to="/uniwaste" 
                className="dropdown-item"
                onClick={handleCaseStudyClick}
              >
                UniWaste
              </Link> */}
              <Link 
                to="/vybe" 
                className="dropdown-item"
                onClick={handleCaseStudyClick}
              >
                Yle Vybe
              </Link>
            </div>
          )}
        </div>
        
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