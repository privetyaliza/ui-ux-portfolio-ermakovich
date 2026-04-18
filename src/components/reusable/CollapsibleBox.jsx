// Vybe Heart Icons
import iconHeartPurple from '../../img/vybe/icon_purple_heart.svg';
import iconHeartLime from '../../img/vybe/icon_lime_heart.svg';
import React, { useState } from 'react';

// Heart Icons
import iconHeartBrown from '../../img/harvest/icon_brown_heart.svg';
import iconHeartGreen from '../../img/harvest/icon_green_heart.svg';

// Arrow Icons (Brown)
import iconArrowRightBrown from '../../img/harvest/icon_right_opener_brown.svg';
import iconArrowDownBrown from '../../img/harvest/icon_down_opener_brown.svg';

// Arrow Icons (Green) 
// IMPORTANT: I updated these filenames to match the likely names of your green files. 
// Please check that these files exist in your folder!
import iconArrowRightGreen from '../../img/harvest/icon_right_opener_green.svg';
import iconArrowDownGreen from '../../img/harvest/icon_down_opener_green.svg';

import iconArrowRightLime from '../../img/vybe/icon_right_opener_lime.svg';
import iconArrowDownLime from '../../img/vybe/icon_down_opener_lime.svg';

export default function CollapsibleBox({ 
  type = 'insight', // Default to 'insight' (Brown)
  title = "Expandable Section", 
  className = "",
  children 
}) {
  const [isOpen, setIsOpen] = useState(false);


  // 1. Determine classes based on type
  let variantClass = 'collapsible-insight';
  let heartIcon = iconHeartBrown;
  let arrowRight = iconArrowRightBrown;
  let arrowDown = iconArrowDownBrown;

  if (type === 'sustainability') {
    variantClass = 'collapsible-sustainability';
    heartIcon = iconHeartGreen;
    arrowRight = iconArrowRightGreen;
    arrowDown = iconArrowDownGreen;
  } else if (type === 'purple') {
    variantClass = 'collapsible-purple';
    heartIcon = iconHeartPurple;
    // Use brown arrows for now, unless custom lime arrows are added
  } else if (type === 'lime') {
    variantClass = 'collapsible-lime';
    heartIcon = iconHeartLime;
    arrowRight = iconArrowRightLime;
    arrowDown = iconArrowDownLime;
    // Use brown arrows for now, unless custom lime arrows are added
  }

  // 4. Pick the specific arrow based on open/closed state
  const currentArrow = isOpen ? arrowDown : arrowRight;

  return (
    <div className={`collapsible-box ${variantClass} ${className}`}>
      {/* Header */}
      <button 
        className="collapsible-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="collapsible-title-wrapper">
          <img 
            src={heartIcon} 
            alt="Heart Icon" 
            className="collapsible-icon" 
            key={heartIcon}
          />
          <h2 className="collapsible-title">{title}</h2>
        </div>
        
        <img 
          src={currentArrow} 
          alt={isOpen ? "Collapse" : "Expand"} 
          className="collapsible-arrow"
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
}