import React from 'react';

// Update these paths to match your folder structure
import iconBrown from '../../img/harvest/icon_brown_heart.svg';
import iconGreen from '../../img/harvest/icon_green_heart.svg'; 

export default function Callout({ type = 'sustainability', children }) {
  const variantClass = type === 'insight' ? 'callout-insight' : 'callout-sustainability';
  const iconSrc = type === 'insight' ? iconBrown : iconGreen;

  return (
    <div className={`callout ${variantClass}`}>
      <img 
        src={iconSrc} 
        alt="icon" 
        className="callout-icon" 
      />
      <p className="callout-text">
        {children}
      </p>
    </div>
  );
}