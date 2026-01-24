import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import profilePic from '../../img/home/profilePic.jpg';

export default function HeroSection() {
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <section className="hero-grid">
      <div className="hero-text-content">
        <h1 className="hero-greeting">Hei! I’m Liza,</h1>
        <p className="hero-subtitle">
          A motivated entry-level UI/UX designer based in Finland.
        </p>
        
        <div className="hero-description">
          <p>
            Curiosity and empathy guide how <br />I 
            <span className="text-highlight research"> research</span>, 
            and creativity and systems thinking guide how I 
            <span className="text-highlight design"> design</span>.
          </p>
        </div>

        {/* ADD THE ONCLICK HERE */}
        <Link 
          to="/#case-studies" 
          className="btn-primary"
          onClick={() => handleScroll('case-studies')}
        >
          See case studies <span>→</span>
        </Link>
      </div>

      <div className="hero-image-wrapper">
        <img src={profilePic} alt="Liza" className="hero-profile-img" />
      </div>
    </section>
  );
}