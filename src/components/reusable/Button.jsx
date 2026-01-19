import React from 'react';

// Optional: Import an arrow icon if you want one inside the button
// import iconArrowRight from '../img/harvest/icon_right_arrow.svg';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', // 'primary' or 'secondary'
  className = '',
  ...props 
}) {
  const baseClass = `btn btn-${variant} ${className}`;

  // If there is an href, render an <a> tag
  if (href) {
    return (
      <a 
        href={href} 
        className={baseClass} 
        target="_blank" 
        rel="noreferrer" // Security best practice for new tabs
        {...props}
      >
        {children}
        {/* Optional: Add arrow icon here */}
        {/* <img src={iconArrowRight} alt="" style={{ height: '1em' }} /> */}
      </a>
    );
  }

  // Otherwise render a standard <button>
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}