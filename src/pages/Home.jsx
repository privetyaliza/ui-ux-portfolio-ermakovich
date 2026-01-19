import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '4rem 2rem',
    textAlign: 'center'
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem'
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the new homepage (currently using primitive styles).</p>
      
      <Link to="/harvest" style={buttonStyle}>
        Check out the Harvest Project →
      </Link>
    </div>
  );
};

export default Home;