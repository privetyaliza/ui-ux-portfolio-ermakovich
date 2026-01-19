import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    padding: '2rem',
    textAlign: 'center',
    marginTop: 'auto', // Pushes it to the bottom
    borderTop: '1px solid #ccc'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 My Portfolio. Built with React & Vite.</p>
    </footer>
  );
};

export default Footer;