// import React from 'react';
// import '../styles/Home.css'; // Import the new file
// import Callout from '../components/reusable/Callout';
// import SkillsSection from '../components/home/SkillsSection';

// import profilePic from '../img/home/profilePic.jpg';

// export function Home() {
//   return (
//     <main className="home-wrapper">
//       <div className="container-readable"> {/* Using your readable width container */}
//         <Callout type="development">
//           This portfolio website is still in development! To see the previous version, click <a href="https://privetyaliza.github.io/ui-ux-portfolio/" target="_blank" rel="noopener noreferrer">here</a> :)
//         </Callout>
        
//         <section className="hero-grid">
//           <div className="hero-text-content">
//             <h1 className="hero-greeting">Hei! I’m Liza,</h1>
//             <p className="hero-subtitle">
//               A motivated entry-level UI/UX designer based in Finland.
//             </p>
            
//             <div className="hero-description">
//               <p>
//                 Curiosity and empathy guide how I 
//                 <span className="text-highlight research"> research</span>, 
//                 and creativity and systems thinking guide how I 
//                 <span className="text-highlight design"> design</span>.
//               </p>
//             </div>

//             <button className="btn-primary">
//               See case studies <span>→</span>
//             </button>
//           </div>

//           <div className="hero-image-wrapper">
//             <img src={profilePic} alt="Liza" className="hero-profile-img" />
//           </div>
//         </section>

//         <SkillsSection />
//       </div>
//     </main>
//   );
// }


import React from 'react';
import '../styles/Home.css';
import Callout from '../components/reusable/Callout';
import HeroSection from '../components/home/HeroSection';
import SkillsSection from '../components/home/SkillsSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';

export function Home() {
  return (
    <main className="home-wrapper">
      <div className="container-readable">
        
        <Callout type="development">
          This portfolio website is still in development! To see the previous version, click <a href="https://privetyaliza.github.io/ui-ux-portfolio/" target="_blank" rel="noopener noreferrer">here</a> :)
        </Callout>
        
        <HeroSection />

        <SkillsSection />

        <CaseStudiesSection />
        
      </div>
    </main>
  );
}