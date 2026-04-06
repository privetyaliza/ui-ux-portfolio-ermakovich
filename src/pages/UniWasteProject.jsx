import React from 'react';
import Section from '../components/reusable/Section';
import Callout from '../components/reusable/Callout';
import CollapsibleBox from '../components/reusable/CollapsibleBox';
import Card from '../components/reusable/Card';

// --- IMAGE SETUP ---
// When you have real images, UNCOMMENT the import and DELETE the const object below.
// import { UniWasteImages } from '../img/loaders/uniwasteimages';

const UniWasteImages = {
  hero: "https://placehold.co/1200x600/e8e8e8/555555?text=UniWaste+Hero+Image",
  iconArrowSvg: "https://placehold.co/50x50/transparent/555555?text=->", 
  wireframes: "https://placehold.co/800x400/e8e8e8/555555?text=My+Wireframes",
  mobileScreens: "https://placehold.co/800x500/e8e8e8/555555?text=Mobile+Screens+(Home+%26+Item)",
  desktopScreens: "https://placehold.co/1000x600/e8e8e8/555555?text=Desktop+Adaptation+Screens",
  codingTable: "https://placehold.co/800x400/e8e8e8/555555?text=Coding+Analysis+Table",
  personaMikko: "https://placehold.co/600x400/e8e8e8/555555?text=Persona:+Mikko"
};
// -------------------

import '../styles/project-base.css';
import '../styles/theme-uniwaste.css';

import SideNavigation from '../components/reusable/SideNavigation';

const UniWasteProject = () => {
  
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'context', title: 'The Concept' },
    { id: 'research', title: 'Research', subItems: [
      { id: 'interviews', title: 'User Interviews' },
      { id: 'analysis', title: 'Data Analysis' },
      { id: 'personas', title: 'User Personas' }, // New Section
      { id: 'market', title: 'Market Analysis' }
    ]},
    { id: 'logic', title: 'System Logic', subItems: [ 
      { id: 'fairness', title: 'The 15-Minute Rule' },
      { id: 'logistics', title: 'Defining "A Portion"' }
    ]},
    { id: 'design', title: 'Design Process', subItems: [
      { id: 'wireframing', title: 'Wireframing' },
      { id: 'layout', title: 'Grid vs. List' }
    ]},
    { id: 'outcome', title: 'Final Outcome', subItems: [
      { id: 'mobile', title: 'Mobile Experience' },
      { id: 'desktop', title: 'Desktop Adaptation' }
    ]},
    { id: 'reflection', title: 'Reflection' }
  ];

  return (
    <main className="page-container">
      <div className="project-page theme-uniwaste">
        
        {/* --- HERO SECTION --- */}
        <div className='container-readable'>
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-title">UniWaste</h1>
              <p className="hero-subtitle">Connecting students with cheap, surplus food.</p>
            </div>
            <img className="hero-image" src={UniWasteImages.hero} alt="Hero image for UniWaste" />
          </div>
        </div>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="harvest-content-wrapper">
          
          <div className="sidebar-track">
            <SideNavigation sections={sections} />
          </div>

          <div className='container-readable'>
            
            <Section id="overview" title="Overview">
              <div className="card-grid">

                <Card variant="transparent" title="Role" align="center">
                  <div className="card-list">
                    <div>UI Design</div>
                    <div>Wireframing</div>
                    <div>User Scenarios</div>
                  </div>
                </Card>

                <Card variant="transparent" title="Team" align="center">
                  <div className="card-list">
                    <div>Elizaveta Ermakovich</div>
                    <div>Katariina Kariniemi</div>
                    <div>Aapeli Riuttala</div>
                  </div>
                </Card>

                <Card variant="transparent" title="Timeline" align="center">
                  <div className="card-list">
                    <div>Oct - Dec 2024</div>
                    <div>8 Weeks</div>
                  </div>
                </Card>

                <Card variant="transparent" title="Tools" align="center">
                  <div className="card-list">
                    <div>Figma</div>
                    <div>Teams</div>
                    <div>Pen & Paper</div>
                  </div>
                </Card>

              </div>
            </Section>

            <Section id="context" title="The Concept">
              <div className="problem-solution-layout">
                <div>
                  <Card variant="beige" title="The Gap">
                    <p>
                      We noticed a logistical gap: Campus restaurants throw away food at the end of the day, 
                      while students are constantly looking for cheap meals. There was no direct way to connect the two.
                    </p>
                  </Card>
                </div>

                <div className="arrow-container">
                  <div className="arrow">
                    <img src={UniWasteImages.iconArrowSvg} alt="arrow" />
                  </div>
                </div>

                <div>
                  <Card variant="green" title="The Idea">
                    <p>
                      Think of it as <strong>Unisafka meets ResQ</strong>.
                      <br/><br/>
                      A service tailored for campus life where restaurants list leftovers instantly, and students 
                      can book them for a discount.
                    </p>
                  </Card>
                </div>
              </div>
            </Section>

            <Section id="research" title="Research">
              
              <div id="interviews" className="subsection">
                <h2 className="subsection-title">User Interviews</h2>
                <p>
                  I conducted 2 in-depth interviews (and our team did 6 in total) to understand how students make choices 
                  about food. We initially assumed they would be motivated by sustainability, but the answers surprised us.
                </p>
                
                <Callout type="insight">
                  <strong>The "Passive Sustainability" Finding:</strong>
                  <br/>
                  Students told us: <em>"Sustainability is not my first priority, but I take it into account."</em> 
                  This meant our app couldn't rely on ethical motivation alone. It had to be useful <strong>first</strong>.
                </Callout>
              </div>

              <div id="analysis" className="subsection">
                <h2 className="subsection-title">Data Analysis</h2>
                <p>
                  To make sense of the interview data, we used thematic coding. We broke down raw answers into categories (Codes) 
                  to find underlying patterns in student behavior.
                </p>

                {/* VISUALIZING THE CODING TABLE */}
                <div className="card-grid">
                  <Card variant="shadowed" title="Theme: Priorities">
                    <div style={{fontSize: '14px', marginBottom: '8px', fontStyle: 'italic'}}>
                      "I'd rather pay €1.95 more for fresh food unless the leftovers are significantly cheaper."
                    </div>
                    <div style={{color: '#666', fontSize: '13px', borderTop: '1px solid #eee', paddingTop: '8px'}}>
                      <strong>Finding:</strong> Price &gt; Sustainability. The discount must be significant to drive behavior.
                    </div>
                  </Card>

                  <Card variant="shadowed" title="Theme: Variety">
                    <div style={{fontSize: '14px', marginBottom: '8px', fontStyle: 'italic'}}>
                      "I don't go for convenience... it's the food variety that matters."
                    </div>
                    <div style={{color: '#666', fontSize: '13px', borderTop: '1px solid #eee', paddingTop: '8px'}}>
                      <strong>Finding:</strong> Users need to know <em>what</em> is available (menu details), not just <em>where</em>.
                    </div>
                  </Card>

                  <Card variant="shadowed" title="Theme: Awareness">
                    <div style={{fontSize: '14px', marginBottom: '8px', fontStyle: 'italic'}}>
                      "I’ve used ResQ a few times... I got what was shown at a good price."
                    </div>
                    <div style={{color: '#666', fontSize: '13px', borderTop: '1px solid #eee', paddingTop: '8px'}}>
                      <strong>Finding:</strong> Students are already familiar with the concept of "rescuing" food, reducing the learning curve.
                    </div>
                  </Card>
                </div>
              </div>

              {/* --- NEW SECTION: PERSONAS --- */}
              <div id="personas" className="subsection">
                <h2 className="subsection-title">User Personas</h2>
                <p>
                  Based on our data, we defined the primary user group: Students aged 18–30 who live near campus. 
                  We synthesized this into our primary persona, <strong>Mikko</strong>.
                </p>

                <div className="media-group">
                  <img src={UniWasteImages.personaMikko} alt="Persona Card: Mikko" />
                </div>

                <div className="card-grid">
                  <Card variant="beige" title="Goals">
                    <ul style={{marginBottom: 0, paddingLeft: '16px'}}>
                      <li>Save money on daily meals.</li>
                      <li>Find nutritious food quickly without cooking.</li>
                      <li>Act responsibly (sustainability) if it's convenient.</li>
                    </ul>
                  </Card>

                  <Card variant="beige" title="Frustrations">
                    <ul style={{marginBottom: 0, paddingLeft: '16px'}}>
                      <li>Campus food is expensive if you buy extra portions.</li>
                      <li>Cooking takes too much time during exam weeks.</li>
                      <li>Lack of variety in student restaurants (same stews every week).</li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* --- MARKET ANALYSIS --- */}
              <div id="market" className="subsection">
                <h2 className="subsection-title">Market Analysis</h2>
                <p>
                  We didn't want to reinvent the wheel. We analyzed two major players in the Finnish market—not as competitors, 
                  but as <strong>mental models</strong> our users were already familiar with.
                </p>

                <div className="card-grid">
                  <Card variant="beige" title="Unisafka.fi">
                    <p style={{fontSize: '14px'}}><strong>What it is:</strong> A menu aggregator for campus restaurants.</p>
                    <p style={{fontSize: '14px', marginTop: '8px'}}><strong>What we learned:</strong> Students are used to a dense, text-heavy <strong>List View</strong>. They scan for dietary tags (G, L, VEG) quickly. We decided to mimic this layout to reduce cognitive load.</p>
                  </Card>

                  <Card variant="beige" title="ResQ Club">
                    <p style={{fontSize: '14px'}}><strong>What it is:</strong> A marketplace for surplus restaurant food.</p>
                    <p style={{fontSize: '14px', marginTop: '8px'}}><strong>What we learned:</strong> ResQ creates <strong>urgency</strong> effectively. We adopted their model of showing exact portion counts ("3 left!") to encourage quick decisions.</p>
                  </Card>
                </div>
              </div>

            </Section>

            <Section id="logic" title="System Logic">
              <p>
                The UI was the easy part. The hard part was defining the rules of the system itself. 
                We spent significant time debating how to make the system fair and logistically viable for restaurant staff.
              </p>

              <div id="fairness" className="subsection">
                <h2 className="subsection-title">Challenge 1: The Fairness Algorithm</h2>
                <p>
                  We faced a dilemma: <strong>Fairness vs. Efficiency</strong>. 
                  If we let one user book all 50 leftovers immediately, it's unfair to other students. 
                  But if we restrict it too much, the food might not get sold and ends up in the trash.
                </p>

                <div className="card-grid">
                  <Card variant="beige" title="The 15-Minute Rule">
                    <p>To solve this, we designed a time-gated reservation logic:</p>
                    <ul style={{marginBottom: 0, paddingLeft: '16px'}}>
                      <li style={{marginBottom: '8px'}}><strong>0–15 mins after closing:</strong><br/> Max 1 portion per student. (Fairness phase)</li>
                      <li><strong>15+ mins after closing:</strong><br/> Max 3 portions per student. (Waste reduction phase)</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div id="logistics" className="subsection">
                <h2 className="subsection-title">Challenge 2: Defining "A Portion"</h2>
                <CollapsibleBox type="insight" title="The Logistics Debate: Plate vs. Box">
                   <p>
                     We debated how the food should be sold. Should students bring their own containers and fill them (Self-Service)? 
                     Or should the restaurant pre-pack them?
                   </p>
                   <p>
                     <strong>Decision: Pre-packed.</strong><br/>
                     We realized that allowing self-service creates pricing ambiguity (how much fits in a box?). 
                     By requiring restaurants to pre-pack leftovers into identical containers, we standardized the "Product," 
                     making it easier to display inventory numbers (e.g., "5 Portions Left") in the UI.
                   </p>
                </CollapsibleBox>
              </div>
            </Section>

            <Section id="design" title="Design Process">
              
              <div id="wireframing" className="subsection">
                <h2 className="subsection-title">Wireframing</h2>
                <p>
                  I was responsible for creating the initial wireframes. My main challenge was structuring the information: 
                  how to show a lot of food options without overwhelming the user.
                </p>
                <img className="img-wide" src={UniWasteImages.wireframes} alt="My initial wireframes" />
                <p>
                  These sketches eventually became the foundation for our final high-fidelity design.
                </p>
              </div>

              <div id="layout" className="subsection">
                <h2 className="subsection-title">The Pivot: Grid vs. List</h2>
                <p>
                  We debated two layouts for the "Available Food" feed: a <strong>Grid of Squares</strong> (like Instagram) vs. a <strong>Vertical List</strong>.
                </p>

                <div className="card-grid">
                  <Card variant="transparent" align="center">
                    <div style={{background: '#f5f5f5', padding: '20px', borderRadius: '8px', color: '#888'}}>
                      [Insert Sketch of Grid Layout]
                    </div>
                    <p style={{fontSize: '13px', marginTop: '8px'}}>The "Modern" Grid</p>
                  </Card>
                  
                  <Card variant="transparent" align="center">
                     <div style={{background: '#f5f5f5', padding: '20px', borderRadius: '8px', color: '#888'}}>
                      [Insert Sketch of List Layout]
                    </div>
                    <p style={{fontSize: '13px', marginTop: '8px'}}>The "Functional" List</p>
                  </Card>
                </div>

                <CollapsibleBox type="insight" title="Why we chose the List View">
                  <p>
                    While grids look visually appealing, they cut off text. Our research showed that students care deeply about details 
                    (ingredients, allergies). A list view allowed us to display critical tags like <strong>VEG, G, L</strong> right on the card without clicking. 
                    It also matched the mental model of <em>Unisafka.fi</em>, a service students already use daily.
                  </p>
                </CollapsibleBox>
              </div>
            </Section>

            <Section id="outcome" title="Final Outcome">
              
              <div id="mobile" className="subsection">
                <h2 className="subsection-title">Mobile Experience</h2>
                <p>
                  The mobile view is designed for urgency. We used color-coded price tags to indicate availability 
                  at a glance: <strong>Green</strong> (&gt;15 portions), <strong>Yellow</strong> (&lt;15 portions), and <strong>Red</strong> (&lt;5 portions).
                </p>
                <img className="img-wide" src={UniWasteImages.mobileScreens} alt="Mobile screens" />
              </div>

              <div id="desktop" className="subsection">
                <h2 className="subsection-title">Desktop Adaptation</h2>
                <p>
                  We identified a secondary context of use: <strong>The Library</strong>. Students often study for hours with their laptops open. 
                  Forcing them to check their phone for food alerts breaks their flow.
                </p>
                <img className="img-wide" src={UniWasteImages.desktopScreens} alt="Desktop version" />
                <p>
                  I expanded the list view into a dashboard grid to utilize the horizontal screen space, allowing users to 
                  compare more options at once without scrolling.
                </p>
              </div>

            </Section>

            <Section id="reflection" title="Reflection">
              <div className="card-grid" style={{marginTop: "0"}}>
                <Card variant="green" title="What I learned">
                  <ul>
                    <li><strong>Sustainability is a UX problem.</strong> Users won't save the planet if the interface makes it hard.</li>
                    <li><strong>Facilitation is difficult.</strong> I learned how challenging it is to explain concepts like "sustainability" during interviews without biasing the user's answer.</li>
                    <li><strong>Logic matters.</strong> Designing the "15-minute rule" taught me that UX is more about system rules than just pixels.</li>
                  </ul>
                </Card>

                <Card variant="beige" title="What I would improve">
                  <ul>
                    <li><strong>The Payment Flow.</strong> We struggled to decide whether payment should happen in-app or on-site. In hindsight, I would have prototyped both flows and A/B tested them.</li>
                    <li><strong>Gamification.</strong> The current design is purely functional. Adding a "CO2 Saved" counter could have bridged the gap between saving money and saving the planet.</li>
                  </ul>
                </Card>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default UniWasteProject;