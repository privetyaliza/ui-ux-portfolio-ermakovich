import React from 'react';
import Section from '../components/reusable/Section';
import Card from '../components/reusable/Card';
import Callout from '../components/reusable/Callout';
import Button from '../components/reusable/Button';
import SideNavigation from '../components/reusable/SideNavigation'; // Import the generic component

// Import your styles (reusing Harvest styles for layout)
import '../styles/components.css';
import '../styles/uniwaste.css'; // Or CaseStudy.css if you renamed it

// --- 1. DEFINE THE SIDEBAR LINKS FOR THIS SPECIFIC PROJECT ---
const uniWasteNav = [
  { id: 'overview', label: 'Overview' },
  { id: 'process', label: 'Design Process', subItems: [
      { id: 'research', label: 'User Research' },
      { id: 'wireframes', label: 'Wireframes' },
      { id: 'visual-design', label: 'Visual Design' }
    ]
  },
  { id: 'contribution', label: 'My Contribution' },
  { id: 'prototype', label: 'Interactive Prototype' }
];

export default function UniWasteProject() {
  return (
    <main className="page-container">
      <div className="uniwaste-project"> {/* Reusing the wrapper class for font/spacing consistency */}
        
        {/* HERO SECTION */}
        <div className="hero-section" style={{ backgroundColor: '#C4E3FF' }}> {/* Custom blue BG for UniWaste */}
          <div className="hero-text">
            <h1 className="hero-title">UniWaste Service</h1>
            <p className="hero-subtitle">Reducing food waste through a campus-sharing platform</p>
          </div>
          {/* PLACEHOLDER IMAGE - Replace with your actual Hero Image */}
          <div className="hero-image" style={{ background: '#ddd', height: '300px', width: '100%', borderRadius: '16px' }}>
             {/* <img src={UniWasteImages.hero} alt="UniWaste Hero" /> */}
          </div>
        </div>

        {/* LAYOUT GRID */}
        <div className="harvest-layout-grid">
          
          {/* LEFT COLUMN: Sidebar with UniWaste links */}
          <SideNavigation items={uniWasteNav} />

          {/* RIGHT COLUMN: Content */}
          <div className="harvest-content-column">

            <Section id="overview" title="Overview">
              <div className="card-grid">
                <Card variant="transparent" title="Course" align="center">
                  <div className="card-list"><div>HTI.110 User Interfaces</div><div>Human-Centered Design</div></div>
                </Card>
                <Card variant="transparent" title="Team" align="center">
                  <div className="card-list"><div>Elizaveta Ermakovich</div><div>Katariina Kariniemi</div><div>Aappeli Riuttala</div></div>
                </Card>
                <Card variant="transparent" title="Goal" align="center">
                  <div className="card-list"><div>Reduce Campus Food Waste</div><div>Redistribute Leftovers</div></div>
                </Card>
              </div>

              <div className="problem-solution-layout">
                <div>
                  <Card variant="beige" title="The Problem">
                    <p>
                      Food waste in campus restaurants is a major issue, with large amounts of unpurchased food 
                      being thrown away at the end of the day.
                    </p>
                  </Card>
                </div>
                <div className="arrow-container">
                  <div className="arrow" style={{ fontSize: '24px' }}>→</div>
                </div>
                <div>
                  <Card variant="green" title="The Solution">
                    <p>
                      UniWaste: A web service that offers a platform for redistributing leftover food to 
                      students at the end of the working day, inspired by services like ResQ.
                    </p>
                  </Card>
                </div>
              </div>
            </Section>

            <Section id="process" title="Design Process">
              
              <div className="subsection" id="research">
                <h2 className="subsection-title">User Research</h2>
                <p>
                  For the user research phase, my team developed interview questions aimed at understanding 
                  student perspectives on food waste. I conducted <strong>2 user interviews</strong>, which contributed 
                  to the creation of a user persona that represented our target audience.
                </p>
                <Callout type="insight">
                  Thematic coding was the main tool for data analysis. After it was completed, main user needs 
                  were identified which gave us the direction for the design of the service.
                </Callout>
                <p className="caption">An example of coding for one of the interview questions (Insert Image Here)</p>
              </div>

              <div className="subsection" id="wireframes">
                <h2 className="subsection-title">Wireframes</h2>
                <p>
                  The identified user needs helped us make decisions on the structure and layout of the service 
                  and create the first wireframes.
                </p>
                 {/* Placeholder for Wireframe Image */}
                <div style={{ background: '#f5f5f5', padding: '40px', textAlign: 'center', marginBottom: '24px' }}>
                  [Image: Initial Wireframes]
                </div>
              </div>

              <div className="subsection" id="visual-design">
                <h2 className="subsection-title">Visual Design</h2>
                <p>
                  For the visual design, we decided to base the style on the <strong>Unisafka</strong> (campus restaurant 
                  menu aggregator) website and chose green as the primary color to emphasize sustainability.
                </p>
                <Callout type="sustainability">
                  Simplicity and minimalism were prioritized in the design, reflecting user feedback from the research phase.
                </Callout>
                {/* Placeholder for Final Screens */}
                <div style={{ background: '#f5f5f5', padding: '40px', textAlign: 'center', marginBottom: '24px' }}>
                  [Image: Mobile and Desktop Screens]
                </div>
              </div>
            </Section>

            <Section id="contribution" title="My Contribution">
              <p>
                In this project, I was responsible for designing the <strong>individual item page</strong> and its 
                pop-up windows, and the <strong>desktop version</strong> of the service. While I worked closely with my team 
                members on all aspects of the project, these areas were my primary focus.
              </p>
            </Section>

            <Section id="prototype" title="Interactive Prototype">
              <div className="card-grid">
                <Card variant="transparent" align="center" title="Mobile Version">
                   <Button href="#">View Mobile Prototype ↗</Button>
                </Card>
                <Card variant="transparent" align="center" title="Desktop Version">
                   <Button href="#">View Desktop Prototype ↗</Button>
                </Card>
              </div>
            </Section>

          </div> {/* End Content Column */}
        </div> {/* End Layout Grid */}
      </div>
    </main>
  );
}