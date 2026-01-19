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

export default function CollapsibleBox({ 
  type = 'insight', // Default to 'insight' (Brown)
  title = "Expandable Section", 
  className = "",
  children 
}) {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Determine classes based on type
  const variantClass = type === 'sustainability' 
    ? 'collapsible-sustainability' 
    : 'collapsible-insight';

  // 2. Determine Heart Icon based on type
  const heartIcon = type === 'sustainability' ? iconHeartGreen : iconHeartBrown;

  // 3. Determine Arrow Set based on type (Green set vs Brown set)
  const arrowRight = type === 'sustainability' ? iconArrowRightGreen : iconArrowRightBrown;
  const arrowDown = type === 'sustainability' ? iconArrowDownGreen : iconArrowDownBrown;

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