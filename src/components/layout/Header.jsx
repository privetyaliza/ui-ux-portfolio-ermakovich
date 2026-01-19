import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Spreads logo and nav apart
    padding: '0 2rem',
    zIndex: 1000,
    boxSizing: 'border-box'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '1.2rem'
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>My Portfolio</div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/harvest" style={linkStyle}>Harvest Case Study</Link>
      </nav>
    </header>
  );
};

export default Header;