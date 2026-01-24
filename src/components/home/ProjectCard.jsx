// src/components/home/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

export default function ProjectCard({ project }) {
  // 2. Extract 'path' from the project data
  const { title, description, image, status, bgColor, path } = project;

  const isComingSoon = status === 'coming-soon';

  // 3. Define the inner content (Image + Text) so we don't have to copy-paste it twice
  const cardContent = (
    <>
      <div 
        className="project-image-container"
        style={{ backgroundColor: bgColor }} 
      >
        {isComingSoon ? (
          <div className="coming-soon-placeholder">
            <h3>COMING SOON</h3>
          </div>
        ) : (
          <img src={image} alt={title} className="project-devices-img" />
        )}
      </div>

      <div className="project-text-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </>
  );

  // 4. LOGIC: If it's "Coming Soon", return a regular DIV (not clickable)
  if (isComingSoon) {
    return (
      <div className="project-card coming-soon-card">
        {cardContent}
      </div>
    );
  }

  // 5. If it's ready, return a LINK (clickable)
  return (
    <Link to={path} className="project-card">
      {cardContent}
    </Link>
  );
}