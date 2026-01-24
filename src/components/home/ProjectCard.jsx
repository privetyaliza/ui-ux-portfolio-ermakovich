export default function ProjectCard({ project }) {
  // 1. Extract the new 'bgColor' property
  const { title, description, image, status, bgColor } = project;

  const isComingSoon = status === 'coming-soon';

  return (
    <div className={`project-card ${isComingSoon ? 'coming-soon-card' : ''}`}>
      
      {/* 2. Apply the color here using the 'style' attribute */}
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
      
    </div>
  );
}