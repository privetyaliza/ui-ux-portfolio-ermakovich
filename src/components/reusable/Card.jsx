import React from 'react';

export default function Card({ 
  variant = 'beige', 
  image, 
  title, 
  titleType = 'default', 
  align = 'left',
  imageClass = 'card-image',
  className = '',
  children 
}) {
  const variantClass = `card-${variant}`;
  const titleClass = titleType === 'alt' ? 'card-title card-title-alt' : 'card-title';
  
  const alignClass = `card-align-${align}`;

  const imgSrc = image?.src || image;
  const imgStyle = image?.style || {};

  return (
    <div className={`card ${variantClass} ${alignClass} ${className}`}>
      {image && (
        <img 
          src={imgSrc} 
          alt={title || "Card illustration"} 
          className={imageClass} 
          style={imgStyle} 
        />
      )}

      {title && <h4 className={titleClass}>{title}</h4>}

      <div className="card-text">
        {children}
      </div>
    </div>
  );
}