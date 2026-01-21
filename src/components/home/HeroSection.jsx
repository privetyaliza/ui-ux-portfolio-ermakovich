import React from 'react';
import profilePic from '../../img/home/profilePic.jpg';

export default function HeroSection() {
  return (
    <section className="hero-grid">
      <div className="hero-text-content">
        <h1 className="hero-greeting">Hei! I’m Liza,</h1>
        <p className="hero-subtitle">
          A motivated entry-level UI/UX designer based in Finland.
        </p>
        
        <div className="hero-description">
          <p>
            Curiosity and empathy guide how I 
            <span className="text-highlight research"> research</span>, 
            and creativity and systems thinking guide how I 
            <span className="text-highlight design"> design</span>.
          </p>
        </div>

        <button className="btn-primary">
          See case studies <span>→</span>
        </button>
      </div>

      <div className="hero-image-wrapper">
        <img src={profilePic} alt="Liza" className="hero-profile-img" />
      </div>
    </section>
  );
}