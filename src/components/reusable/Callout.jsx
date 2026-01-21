import React from 'react';
import iconBrown from '../../img/harvest/icon_brown_heart.svg';
import iconGreen from '../../img/harvest/icon_green_heart.svg'; 
import iconBlue from '../../img/home/icon_blue_heart.svg'; // Ensure this path is correct

export default function Callout({ type = 'sustainability', children }) {
  // Determine class based on type
  let variantClass = 'callout-sustainability';
  let iconSrc = iconGreen;

  if (type === 'insight') {
    variantClass = 'callout-insight';
    iconSrc = iconBrown;
  } else if (type === 'development') {
    variantClass = 'callout-development';
    iconSrc = iconBlue;
  }

  return (
    <div className={`callout ${variantClass}`}>
      <img src={iconSrc} alt="icon" className="callout-icon" />
      <p className="callout-text">
        {children}
      </p>
    </div>
  );
}