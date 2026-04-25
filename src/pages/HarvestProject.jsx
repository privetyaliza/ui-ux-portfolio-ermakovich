import React, { useRef } from 'react';
import Section from '../components/reusable/Section';
import Callout from '../components/reusable/Callout';
import CollapsibleBox from '../components/reusable/CollapsibleBox';
import Card from '../components/reusable/Card';
import Button from '../components/reusable/Button';

import { HarvestImages } from '../img/loaders/harvestimages';

import '../styles/project-base.css';
import '../styles/theme-harvest.css';

import SideNavigation from '../components/reusable/SideNavigation';

const HarvestProject = () => {
  const lowCarbonRef = useRef(null);

  const scrollToLowCarbon = () => {
    if (lowCarbonRef.current) {
      lowCarbonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'vision', title: 'Vision' },
    { id: 'outcome', title: 'Design Outcome' },
    { id: 'process', title: 'Process', subItems: [
      { id: 'ways-of-working', title: 'Ways of Working' },
      { id: 'contribution', title: 'My Contribution' }
    ]},
    { id: 'research', title: 'Research', subItems: [
      { id: 'mindmaps', title: 'Mindmaps' },
      { id: 'desk-research', title: 'Desk Research' },
      { id: 'segmentation', title: 'User Segmentation' },
      { id: 'archetypes', title: 'User Archetypes' },
      { id: 'market-analysis', title: 'Market Analysis' }
    ]},
    { id: 'ideation', title: 'Ideation', subItems: [
      { id: 'moodboarding', title: 'Moodboarding' },
      { id: 'brainstorming', title: 'Feature Brainstorming' },
      { id: 'user-journey', title: 'User Journey' }
    ]},
    { id: 'concept-development', title: 'Concept Development', subItems: [
      { id: 'ia', title: 'Information Architecture' },
      { id: 'crazy-8s', title: 'Sketching with Crazy 8s' },
      { id: 'wireframing', title: 'Wireframing' },
      { id: 'mid-fi', title: 'Mid-fidelity Prototyping' }
    ]},
    { id: 'evaluation', title: 'Evaluation', subItems: [
      { id: 'user-testing', title: 'User Testing' },
      { id: 'feedback', title: 'Feedback & Iterations' },
      { id: 'improvements', title: 'Major Improvements' }
    ]},
    { id: 'implementation', title: 'Implementation', subItems: [
      { id: 'design-system', title: 'Design System' },
      { id: 'low-carbon', title: 'Low-carbon Interface' },
      { id: 'other-changes', title: 'Other changes' },
      { id: 'prototype', title: 'Interactive Prototype' }
    ]},
    { id: 'reflection', title: 'Reflection', subItems: [
      { id: 'my-learnings', title: 'My Learnings' }
    ]}
  ];

  return (
    <main className="page-container">
      <div className="project-page theme-harvest">
        
        {/* 1. HERO SECTION - Centered, no sidebar here */}
        <div className='container-readable'>
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-title">Harvest</h1>
              <p className="hero-subtitle">A delivery app that makes seasonal & local eating effortless</p>
            </div>
            <img className="hero-image" src={HarvestImages.hero} alt="Hero image for Harvest project" />
          </div>
        </div>

        {/* 2. LOWER PAGE WRAPPER - Sidebar and content live here */}
        <div className="harvest-content-wrapper">
          
          {/* SIDEBAR TRACK - Anchored to the far left of the screen */}
          <div className="sidebar-track">
            <SideNavigation sections={sections} />
          </div>

          {/* CENTERED CONTENT - Case study text remains perfectly centered */}
          <div className='container-readable'>
            
            <Section id="overview" title="Overview">
              <div className="card-grid">

                <Card 
                  variant="transparent" 
                  title="Disciplines" 
                  align="center"
                >
                  <div className="card-list">
                    <div>Service Design</div>
                    <div>
                      Sustainable<br />Design
                    </div>
                  </div>
                </Card>

                <Card 
                  variant="transparent" 
                  title="Team" 
                  align="center" 
                >
                  <div className="card-list">
                    <div>Liza Ermakovich</div>
                    <div>Minnaleena Jaakkola</div>
                    <div>Ronja Teppo</div>
                  </div>
                </Card>

                <Card 
                  variant="transparent" 
                  title="Tools" 
                  align="center" 
                >
                  <div className="card-list">
                    <div>Figma</div>
                    <div>FigJam</div>
                    <div>Wireframer</div>
                    <div>Canva</div>
                    <div>Trello</div>
                  </div>
                </Card>

                <Card 
                  variant="transparent" 
                  title="My Role" 
                  align="center" 
                >
                  <div className="card-list">
                    <div>UX Research</div>
                    <div>UI Design</div>
                    <div>Questionnaire Design & Data Analysis</div>
                  </div>
                </Card>

                <Card 
                  variant="transparent" 
                  title="Timeline" 
                  align="center" 
                >
                  <div className="card-list">
                    <div>May - Aug 2025</div>
                  </div>
                </Card>

              </div>

              <div className="problem-solution-layout">
                <div>
                  <Card variant="beige" title="Problem">
                    <p><mark>Most consumers care about food origins but lack clear, centralized info on seasonality and producers.</mark> 
                      Information is scattered, and small farms often rely on informal channels like Facebook comments. 
                      <mark>There is currently no single platform that connects consumers with producers.</mark></p>
                  </Card>
                </div>

                <div className="arrow-container">
                  <div className="arrow">
                    <img src={HarvestImages.iconArrowSvg} alt="arrow" />
                  </div>
                </div>

                <div>
                  <Card variant="green" title="Solution">
                    <p>We designed Harvest, a delivery app that aggregates local food producers into <mark class="mark-green">one simple platform.</mark> 
                      Harvest helps users <mark class="mark-green">discover what’s in season, learn where their food comes from, and order directly from nearby farms.</mark></p>
                  </Card>
                </div>
              </div>
            </Section>

            <Section id="vision" title="Our Vision"
              intro={
                <p>
                  Harvest is a grocery shopping app developed with the aim of <mark>making shopping directly from the local food producers more convenient</mark> for end consumers. The project topic was inspired by our desire to <mark>enable more sustainable habits among end consumers.</mark> Eating habits have a broad effect on one’s carbon footprint, but they are also one of the hardest to influence. With Harvest, we hoped to <mark>bring produce closer to the average consumer and help them stay on track with seasons,</mark> thus enabling a more sustainable lifestyle.
                </p>
              }>

              <div>
                <Callout type="sustainability">
                  From the very beginning, we wanted our project to <mark class="mark-light-green">promote sustainability in all of its aspects.</mark> It’s main purpose is to promote sustainable eating habits and spread the knowledge of seasonality, but…
                </Callout>

                <Callout type="insight">
                  At the same time, we wanted to <mark>be mindful of how we designed the app itself.</mark> One choice we made was <mark>not to use generative AI at any stage.</mark> It may seem controversial, but we agreed that for this particular project it made sense both in terms of sustainability and our individual learning purposes. By the end, <mark>we built two interface versions: a regular and a low-carbon one.</mark> More on that <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={scrollToLowCarbon}>in this section</span>!
                </Callout>
              </div>
            </Section>

            <Section id="outcome" title="Design Outcome">
              <img width="140vw" className="img-wide" src={HarvestImages.designOutcome} alt="Design outcome image showing 3 Harvest app screens" />
            </Section>

            <Section id="process" title="The Process">

              <div id="ways-of-working" className="subsection">
                <h2 className="subsection-title">Ways of Working</h2>
                
                <p>Harvest was created as part of the Research and Innovation Project in Human-Technology Interaction 
                  summer course at Tampere University. The course was very free-form, which meant we had <mark>full control over the project's direction and execution.</mark> We worked in a format of <mark>2-week design sprints, following the agile methodology,</mark> with each sprint focusing on one of the 5 stages of the process (Research, 
                  Ideation, Concept Development, Evaluation, and Final Implementation). We rotated the facilitator role 
                  for each sprint so that everyone could have a chance to contribute their personal vision and learn to 
                  lead the team.</p>
              </div>

              <div id="contribution" className="subsection">
                <h2 className="subsection-title">My Contribution</h2>
                <ul>
                <li>During the research and ideation phase, I conducted <mark>desk research on behavioral theory and sustainability.</mark> 
                  I also contributed to the mindmapping and market analysis.</li>
                <li>During the ideation phase, I created <mark>the user journey and the information architecture.</mark></li>
                <li>During the concept development phase, I advocated for using <mark>Crazy 8s</mark> as the brainstorming method to get as 
                  many mockup ideas as possible. <mark>The In Season tab was my primary focus:</mark> I created the core concept and worked 
                  it through to the final version. Additionally, I curated the imagery and icons for our design system, as well 
                  as helped with typography and color palette.</li>
                <li>During the evaluation phase, my responsibility was <mark>creating the post-test questionnaire and summarizing its results</mark> for the team.</li>
                <li>I built the <mark>final high-fidelity version of In Season</mark> as well as created most of the overlays in the prototype 
                  (such as bottom navigation and "add to cart" confirmation).</li>
                <li>Finally, I facilitated two out of our five design sprints and had a secretary (aka “note-taker”) role in 
                  another two. Overall, there was a high level of collaboration in this project and I feel like <mark>I contributed meaningfully to each of its stages.</mark></li>
                </ul>
              </div>
            </Section>

            <Section id="research" title="Research"
              intro={
                <p>
                We started with a vague idea of designing a service for <mark>encouraging more sustainable and intentional living.</mark> 
                Seasonality felt like a good entry point, since it’s something very concrete and was a shared curiosity among all 
                of us. During the initial discussion, local food production kept coming up and it seemed to be the perfect bridge 
                to seasonal eating. That’s how we landed on the idea of <mark>connecting people with local producers to help them eat in line with seasons.</mark>
                </p>
              }>

              <div id="mindmaps" className="subsection">
                <h2 className="subsection-title">Mindmaps</h2>
                <img className="img-wide" src={HarvestImages.mindmap} alt="Mindmap of seasonal eating and local food production" />
              </div>

              <div id="desk-research" className="subsection">
                <h3 className="subsection-title">Desk Research</h3>

                <p>
                  We conducted an <mark>extensive desk research</mark> to understand the local food market landscape, psychology and 
                  theory behind consumer behavior, and some important numbers.
                </p>

                <img src={HarvestImages.deskResearch} alt="Desk research on local food market landscape, psychology and 
                theory behind consumer behavior, and some numbers" />

                <p>
                  Each of us took one area to dig into and later presented our findings to build a shared understanding 
                  of the topic. My task was to look into <mark>behavioral psychology in relation to UX and sustainability</mark> (the 
                  blue sticky notes). Other team members explored practice theory and the current state of local food 
                  production in Finland. We then summarised several main findings and their design implications:
                </p>
                
                <div>
                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding">
                      <p>
                        <mark class="mark-green">Most people buy seasonal produce simply because it's cheaper or more available,</mark> not because 
                        they actually know what is in season.
                      </p>
                    </Card>
                  </div>

                  <div className="arrow-container">
                    <div className="arrow">
                      <img src={HarvestImages.iconArrowSvg} alt="arrow" />
                    </div>
                  </div>

                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>
                        <mark>The app needs to do the thinking for the user.</mark> We need a dedicated feature that explicitly 
                        teaches users what is in season right now.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding">
                      <p>
                        <mark class="mark-green">Finnish winter is a quiet time for local farms.</mark> The active season is short - mostly summer 
                        and early autumn.
                      </p>
                    </Card>
                  </div>

                  <div className="arrow-container">
                    <div className="arrow">
                      <img src={HarvestImages.iconArrowSvg} alt="arrow" />
                    </div>
                  </div>

                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>
                        To <mark>keep users engaged year-round,</mark> we need to add not only fruits and vegetables but also dairy 
                        and preserved foods. Additionally, we agreed to integrate seasonal items from warmer countries 
                        so that the user knows what to shop for in regular stores during cold seasons.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout">
                  <div>
                    <Card variant="green" title="Finding">
                      <p>
                        <mark class="mark-green">Producers’ digital presence varies a lot.</mark> Many farms don’t use modern digital tools for 
                        selling. Others rely on Facebook groups or informal information channels.
                      </p>
                    </Card>
                  </div>

                  <div className="arrow-container">
                    <div className="arrow">
                      <img src={HarvestImages.iconArrowSvg} alt="arrow" />
                    </div>
                  </div>

                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>
                        The product needs to have a <mark>very simple, somewhat familiar marketplace structure</mark> that 
                        wouldn’t overwhelm the user.
                      </p>
                    </Card>
                  </div>
                </div>
                </div>


              <Callout type="sustainability" title="Desk Research Finding">
                <p>
                  We discovered that <mark class="mark-light-green">eating habits are one of the biggest contributors to the personal carbon footprint,</mark> yet also among the hardest practices to change. If eating seasonally can to some 
                  extent be done subconsciously, eating locally has to be an active choice.
                </p>
              </Callout>
              </div>

              <div id="segmentation" className="subsection">
                <h2 className="subsection-title">User Segmentation</h2>

                <div>

                <p>
                  We browsed some Facebook and Instagram groups related to sustainable & ethical eating to find 
                  out more about <mark>people’s needs and frustrations.</mark>
                </p>

                <img src={HarvestImages.userSegmentation} alt="User segmentation chart for Harvest project" />

                <div>
                <h3>Our Findings</h3>

                <div className="card-grid">
                <Card 
                  variant="beige"
                  title="1"
                >
                  <mark>Most people value price and familiarity over sustainability</mark> of their food.
                </Card>

                <Card 
                  variant="beige" 
                  title="2"
                >
                  The main motivation for eating sustainably is <mark>health, secondary - supporting local farmers.</mark>
                </Card>

                <Card 
                  variant="beige" 
                  title="3"
                >
                  People prefer to buy local food from <mark>farms whose owners they know personally.</mark>
                </Card>
              </div>
              </div>

              <Callout type="insight" title="User Segmentation Finding">
                <p>
                  <mark>People want to eat sustainably, but the effort required to find local products creates friction that outweighs their motivation</mark>
                </p>
              </Callout>

              </div>

              </div>

              <div id="archetypes" className="subsection">
                <h2 className="subsection-title">User Archetypes</h2>

                <p>
                  Based on our findings from user segmentation, we defined <mark>two main user archetypes</mark> that represent 
                  our primary target audience.
                </p>

                <div className="card-grid">
                  <Card 
                    variant="green" 
                    title="Young & Sustainability-Minded"
                    image={HarvestImages.youngAndSustainabilityMinded}
                  >
                    In their 20s or early 30s, this user <mark class="mark-green">cares about sustainability and the ethical side of food production.</mark> They are curious about seasonal eating but don’t always know what’s in season or 
                    where to find local producers.
                  </Card>

                  <Card 
                    variant="beige" 
                    title="Health-Conscious Parent"
                    image={HarvestImages.healthConsciousParent}
                  >
                    A parent with a busy household who <mark>cares deeply about what goes into their family’s food.</mark> 
                    They prefer organic options and buying directly from nearby farms but often <mark>don’t have time to search for producers one by one.</mark>
                  </Card>
                </div>

              </div>

              <div id="market-analysis" className="subsection">
                <h2 className="subsection-title">Market Analysis</h2>

                <p>
                Although our app is something that <mark>hasn’t been done before,</mark> we wanted to take a closer look at how 
                the local food distribution system works in Finland today. Additionally, we checked out the current 
                solutions for promoting seasonal eating.
                </p>

                <div className="media-group">
                <img src={HarvestImages.marketAnalysis} alt="Market analysis"/>
                <span className="caption">This is how a lot of local food shopping currently works: through poster 
                  stands, Excel sheets and Facebook comments.</span>
                </div>
                      
                <div className="card-grid">
                  <Card
                    variant="beige" 
                    title="REKO"
                    image={HarvestImages.logoReko}
                  >
                    REKO rings allow consumers to order food directly from local producers. They operate as Facebook 
                    groups all over Finland on a voluntary basis.
                  </Card>

                  <Card 
                    variant="beige" 
                    title="Tietäväinen"
                    image={HarvestImages.logoTietavainen}
                  >
                    A website for placing orders on high-quality organic products from Tietäväinen Enterprise. Allows 
                    also to browse through available products and prices.
                  </Card>

                  <Card 
                    variant="beige" 
                    title="Satokausi -app"
                    image={HarvestImages.logoSatokausi}
                  >
                    The application combines a seasonal food calendar, a berry & mushroom picking map, and a collection 
                    of recipes.
                  </Card>

                  <Card 
                    variant="beige" 
                    title="Ruokaa Läheltä"
                    image={HarvestImages.logoLahelta}
                  >
                    A digital delivery platform for local food shopping in southwest Finland. Customers place an order 
                    and receive delivery within 24 hours.
                  </Card>
                </div>

              <img src={HarvestImages.sum} alt="A sum sign"/>
              <Callout type="insight" title="Seasonality + Local Food Market">
                <p>
                  All the research insights led us to a simple goal: <mark>create one place for seasonal food information and an online local shopping experience.</mark>
                </p>
              </Callout>

              </div>
            </Section>

            <Section id="ideation" title="Ideation"
              intro={
                <p>
                  Now that we have settled with the focus of the project, it was time to brainstorm. Our goal was to <mark>come up with as many ideas as possible</mark> without considering feasibility at this stage, so that later we had 
                  enough options to filter out the best ones.
                </p>
              }
            >
              <CollapsibleBox type="insight" title=" Why a mobile app?" className="centered-content">
                <div className="card-grid">
                  <Card 
                    variant="shadowed"
                    title="Habit building happens on mobile, not web"
                  >
                    Seasonal eating and buying local produce requires repeated micro-behaviors, which are <mark>far more natural on a smartphone.</mark>
                  </Card>

                  <Card 
                    variant="shadowed" 
                    title="Online food shopping is inherently mobile"
                  >
                    People are used to grocery & delivery apps rather than websites.          
                  </Card>

                  <Card 
                    variant="shadowed" 
                    title="To match producers’ work environment"
                  >
                    Producers are rarely sitting at a desk - they are often in greenhouses, storage rooms, etc. Checking 
                    orders and uploading content is <mark>much simpler with a mobile app.</mark>
                  </Card>
                </div>
              </CollapsibleBox>

              <div id="moodboarding" className="subsection">
                <h2 className="subsection-title">Moodboarding</h2>
                <p>
                  We put together a shared moodboard to capture the vibe we wanted for the app. The main themes were 
                  <mark>“earthy”, “close to the people”, “modern”, “welcoming”, and “real”.</mark>
                </p>
                <div className="media-group">
                  <img src={HarvestImages.moodboard} alt="Moodboard for Harvest project" />
                  <span className="caption">A snippet of the big moodboard we created</span>
                </div>
              </div>

              <div id="brainstorming" className="subsection">
                <h2 className="subsection-title">Feature Brainstorming</h2>
                <p>
                  By combining all the insights that we found, we moved on to defining the functionalities we wanted 
                  our app to have. Based on the main themes from the research phase, local food market and seasonal 
                  eating, we ended up with <mark>3 main sections of the app: Marketplace, In Season, and Local Producers.</mark> 
                  Additionally, we decided to have a home page that combines all of the three in compact widgets.
                </p>

                <Callout type="sustainability" title="Resisting feature overload">
                  When we began mapping potential features, we realized that <mark class="mark-light-green">sustainable design also means resisting feature overload.</mark> 
                  This pushed us to be intentional about what truly needed to exist in the app and 
                  which ideas, although exciting, would only inflate complexity and resource use.
                </Callout>

                <p>
                  But how would the user actually interact with the app? We then turned the user needs into short 
                  scenarios to understand what the interaction flow should look like:
                </p>
                
                <div>
                  <div className="card-grid">
                    <Card 
                      variant="green"
                      className="compact-card"
                    >
                      <h3><em>“I want to know what’s in season”</em></h3>
                    </Card>

                    <Card 
                      variant="green"
                      className="compact-card" 
                    >
                      <h3><em>“I want to buy local food”</em></h3>
                    </Card>
                  </div>

                  <div className="card-grid">
                    <Card 
                      variant="green"
                      className="compact-card" 
                    >
                      <h3><em>“I want to know who the producer is and how the products are produced”</em></h3>
                    </Card>

                    <Card 
                      variant="green"
                      className="compact-card" 
                    >
                      <h3><em>“I want to know what “organic” means and where the prices come from”</em></h3>
                    </Card>
                  </div>
                </div>

                <div className="media-group">
                  <img src={HarvestImages.useScenarios} alt="User scenarios for Harvest project"/>
                  <div className="caption">The original whiteboard version of the 4 scenarios</div>
                </div>

                <p>
                  We took these user needs and broke them down into <mark>specific minimum viable actions</mark> for 
                  each section of Harvest.
                </p>

                <CollapsibleBox type="insight" title="Minimum Viable Actions">
                  <img src={HarvestImages.mva} alt="Minimum viable actions chart for Harvest" />
                </CollapsibleBox>

              </div>

              <div id="user-journey" className="subsection">
                <h2 className="subsection-title">User Journey</h2>
                <p>
                  To understand people’s real struggles and motivations, <mark>I mapped a user journey</mark> of how someone might 
                  navigate shopping for local and seasonal food in Harvest. Seeing their emotional highs and lows helped 
                  us <mark>make a design that actually fits into users’ lives.</mark>
                </p>
                <img src={HarvestImages.userJourney} alt="User journey map for Harvest project"/>
              </div>
            </Section>


            <Section id="concept-development" title="Concept Development"
            intro={<p>Once the concept felt clear enough, we entered <mark>what became the most intense part of the project: concept development.</mark> 
              This meant making big decisions and finally visualizing our product. Sprint 3 was 
              the most time-consuming and consisted of sketching, prototyping, iterating over different designs, and 
              many long discussions.</p>}>

              <div id="ia" className="subsection">
                <h2 className="subsection-title">Information Architecture</h2>
                <img src={HarvestImages.ia} alt="Information architecture diagram for Harvest" />
              </div>

              <div id="crazy-8s" className="subsection">
                <h2 className="subsection-title">Sketching with Crazy 8’s</h2>
                <p>
                  I’d been wanting to try the <mark>Crazy 8s method</mark> for a while, and this project was the perfect excuse. 
                  Crazy 8s is basically folding a page into eight parts and sketching one idea per square as fast as 
                  you can without overthinking.
                </p>
                <img src={HarvestImages.crazy8s} alt="Crazy 8s sketches for Harvest"/>
                <p>
                  We focused on the two main areas of the app: Marketplace and In Season. This exercise helped us <mark>get all our ideas out, and then dig past the obvious ones</mark> to find the nicest solutions. From each stage, we chose 
                  2-3 ideas that we wanted to develop further and turn into wireframes.
                </p>

              </div>

              <div id="wireframing" className="subsection">
                <h2 className="subsection-title">Wireframing</h2>
                <p>
                  It was time to get our hands dirty and start designing! We came up with the following wireframes to better 
                  visualize the available “design paths” and verify that the information architecture we created makes sense.
                </p>
                <div className="media-group">
                  <img src={HarvestImages.wireframes} alt="Wireframes for Harvest"/>
                  <div className="caption">Some of the initial wireframes we designed</div>
                </div>

                <p>
                  We focused on the two main areas of the app: Marketplace and In Season. This exercise helped us get all our 
                  ideas out, and then dig past the obvious ones to find the nicest solutions. From each stage, we chose 2-3 
                  ideas that we wanted to develop further and turn into wireframes.
                </p>
              </div>

              <div id="mid-fi" className="subsection">
                <h2 className="subsection-title">Mid-fidelity prototyping</h2>

                <p>
                  After a lot of discussion and one completely used-up whiteboard marker, we ended up with <mark>3 versions of the In Season page and 2 versions of the Marketplace.</mark>
                </p>

                <div>
                  <h3 style={{ marginBottom: "-32px" }}>In Season</h3>
                  <div className="card-grid">
                    <Card 
                      variant="transparent"
                      title="Simple & Minimalist"
                      align="center"
                      image={HarvestImages.simple}
                      imageClass="card-image-contained"
                    >
                      The straightforward design with the fewest number of elements. We didn't really go with it for the main 
                      idea, but <mark>we ended up using it later in the low-carbon version of the app!</mark>
                    </Card>

                    <Card 
                      variant="transparent"
                      title="Wiggly & Creative"
                      align="center"
                      image={HarvestImages.wiggly}
                      imageClass="card-image-contained"
                    >
                      Sort of an experiment to represent the information in a playful way. <mark>This one was my design and an idea we ended up keeping</mark> (improved, of course) in the final prototype.
                    </Card>

                    <Card
                      variant="transparent"
                      title="Structured & Informative"
                      align="center"
                      image={HarvestImages.structured}
                      imageClass="card-image-contained"
                    >
                      This design was basically an infographic with lots of filters and visual signals. <mark>It was just too complicated both for us to build and for users to grasp.</mark>
                    </Card>
                    </div>
                  </div>
                </div>

                          <div>
                  <h3 style={{ marginBottom: "-32px", marginTop: "-64px" }}>Marketplace</h3>
                  <div className="card-grid">
                    <Card 
                      variant="transparent"
                      title="“Traditional & Straightforward”"
                      align="center"
                      image={HarvestImages.traditional}
                      imageClass="card-image-contained-large"
                    >
                      A classic online supermarket page that most users are familiar with. Its downside in the context of our 
                      app is that there could be multiple similar versions of the same product (e.g., carrot) from different 
                      farmers, which may <mark>potentially overcrowd the categories</mark> like Vegetables and create a cognitive overload.
                    </Card>

                    <Card 
                      variant="transparent"
                      title="“Innovative & Aggregated”"
                      align="center"
                      image={HarvestImages.innovative}
                      imageClass="card-image-contained-large"
                    >
                      This version aimed to improve on the previous one by grouping all items from the same family into one tab, 
                      from which the user can then choose the one they like. This was <mark>at a cost of adding an extra step to the user flow</mark> and introducing the users to a not-so-familiar categorization format.
                    </Card>          
                  </div>
              </div>

              <p style={{ marginTop: "-32px" }}>
                By that point, we had spent enough time discussing the different alternatives and <mark>it was time to ask what actual users think.</mark>
              </p>

            </Section>

            <Section id="evaluation" title="Evaluation">

              <div id="user-testing" className="subsection">
                <h2 className="subsection-title">User Testing</h2>

                <p>
                  We decided to implement the user testing in a form of an <mark>independent prototype walkthrough guided by a specially prepared script.</mark> Each team member recruited one person from their network to be the test participant.
                </p>

                <div className="media-group">
                <img src={HarvestImages.testScript} alt="User testing script" />
                <div className="caption">A snippet of the user testing script</div>
                </div>

                <p>
                  Participants used their own devices to view the prototype in Figma and had to have the script open on the side. 
                  The script contained two main tasks with 3 branches for In Season and 2 branches for the Marketplace. The ultimate 
                  purpose was to <mark>define the best design direction among the alternatives</mark> shown above.
                </p>

                <p>
                  We then asked the users to fill a <mark>post-test questionnaire,</mark> which contained some background questions about their 
                  experiences with buying local food and an evaluation section to choose their favorite designs for In Season and 
                  Marketplace.
                </p>

                <img src={HarvestImages.questionnaire} alt="User testing questionnaire" />

              </div>

              <div id="feedback" className="subsection">
                <h2 className="subsection-title">Feedback & Iterations</h2>

                <p>
                  The user testing gave us some <mark>really helpful insights despite the small number of participants.</mark> After looking at what 
                  people preferred and talking it through as a team, we went with the more familiar Marketplace design (a.k.a. “Traditional 
                  & Straightforward”) and <mark>merged the list and graphic views of In Season</mark> (a.k.a. “Simple & Minimalist” & “Wiggly & Creative”) 
                  into one page. Testers emphasized how important it was to use tags and color-coding on the product cards, and we also got 
                  some cool ideas about how to increase engagement in the app, which led us to use the same product card component everywhere. 
                  The main takeaway? <mark>People like things simple: less clutter on the screen is definitely the way to go</mark> for a mobile app (duh :D).
                </p>

                  <Callout type="sustainability" title="User Testing Key Finding">
                    Users’ preference for clean screens indirectly validated an energy-efficient UI: <mark class="mark-light-green">less clutter and fewer components</mark> to load.
                  </Callout>

              </div>

              <div id="improvements" className="subsection">
                <h2 className="subsection-title" style={{ marginBottom: "8px"}}>Major Improvements</h2>

                <div>
                  <h3 style={{ marginBottom: "0px"}}>Adjustments in the Marketplace</h3>
                  <img src={HarvestImages.improvementsMarketplace} alt="Marketplace changes diagram" />
                </div>

                
                <div>
                  <h3 style={{ marginBottom: "0px"}}>Restructuring In Season</h3>
                  <img src={HarvestImages.improvementsInSeason} alt="In Season changes diagram" />
                </div>

              </div>

            </Section>

            <Section id="implementation" title="Final Implementation"
              intro={
                <p>
                  The final deliverable included <mark>all core functionalities of Harvest.</mark> The evolution of the main screens was directly guided 
                  by our sustainability goals and user feedback.
                </p>
              }
            >

              <div id="design-system" className="subsection">
                <h2 className="subsection-title">Design System</h2>

                <p>
                  During the design process, we were gradually creating a <mark>collection of reusable components</mark> that appear throughout all the 
                  app's sections. These included product cards, tags, carousels, and many more. Additionally, we created a design system with 
                  colors, fonts, spacings, icons and pictures that we used for product cards and banners.
                </p>

                <img src={HarvestImages.designSystem} alt="Harvest design system" />

                <p>
                  We partially built on the <mark>Google's Material 3 library</mark> when creating our components. The icons were taken from Icons8 library 
                  and photos were taken from Unsplash.
                </p>
                
              </div>

              <div id="low-carbon" className="subsection" ref={lowCarbonRef}>
                <h2 className="subsection-title">Low-carbon Interface</h2>

                <p>
                  After we were done with all the screens for the main prototype, we moved on to <mark>creating low-carbon versions</mark> of some of the 
                  screens. This turned out to be a really fun process because it brought up surprising aspects that we didn’t consider before. 
                  For instance, we learned about <mark>dithered photos and how much they can cut down on data transfer.</mark>
                </p>

                <CollapsibleBox type="insight" title={<span>Dithered photos and <em>Dither it!</em> plugin</span>}>
                  <p>
                    Dithering is this neat trick that <mark>uses patterns to fake colors, making photos tiny in size.</mark>
                  </p>
                  <img align="center" width="90%" src={HarvestImages.broccoli} alt="Regular vs dithered broccoli photo comparison" />
                  <p>
                    This was huge for us. Since Harvest is a marketplace, we absolutely had to show the actual product photos 
                    in the Marketplace (and not swap them for icons, for example). We used the <a target="_blank" 
                    href="https://www.figma.com/community/plugin/1141558599392169513/dither-it">Dither It!</a> plugin in Figma 
                    which helped us <mark>create significantly lighter pictures</mark> for our low-carbon interface.
                  </p>
                </CollapsibleBox>

                <div>
                  <h3>Screen comparisons</h3>
                  <img src={HarvestImages.screenComparisons1} alt="In season high vs low carbon" />
                  <img src={HarvestImages.screenComparisons2} alt="Marketplace high vs low carbon" style={{ marginBottom: "24px", marginTop: "40px"}}/>
                </div>

                <div>
                  <h3>Some of the changes we made in the low-carbon interface:</h3>
                  <ul style={{ marginTop: "0px", marginBottom: "16px" }}>
                    <li>Color scheme changed into a darker palette</li>
                    <li>Less images overall, high quality JPG’s were switched to dithered or icons</li>
                    <li>Some tweaks to the user journey (no carousels, more condensed navigation)</li>
                  </ul>
                </div>

                <CollapsibleBox type="sustainability" title="How does this matter?">
                  <p>
                    We have done a calculation of how big of an improvement it makes to swap raster images for dithered/SVG ones (since Harvest 
                    is an e-commerce platform, focusing on the impact of the images made most sense), and the result shocked us. <mark class="mark-light-green">The total improvement in terms of carbon footprint would be 99,1%!</mark> This goes to show that <mark class="mark-light-green">the biggest sustainability impact often comes not from new features, but from rethinking the basics.</mark>
                  </p>
                  <img align="center" width="100%" src={HarvestImages.carbonCalc} alt="Carbon calculations" />
                  <p>
                    Additionally, implementing these changes should preferably be accompanied with green hosting services, minimum amount of third 
                    party tracking as well as efficiently built code in order to count as a fully green service.
                  </p>
                </CollapsibleBox>

              </div>

              <div id="other-changes" className="subsection" style={{ marginBottom: "-48px" }}>
                <h2 className="subsection-title" style={{ marginBottom: "-32px" }}>Other changes</h2>

                  <div className="card-grid">

                    {/* Card 1: Seasonal Item */}
                    <Card variant="transparent" align="center">
                      {/* We put content here to force the order: Title -> Image -> Text */}
                      <h3>Seasonal Item</h3>
                      
                      <img 
                        src={HarvestImages.improvementsSeasonalItem} 
                        alt="Seasonal Item UI"
                        className="space-item-below"
                      />
                    </Card>

                    {/* Card 2: Nudging EcoMode */}
                    <Card variant="transparent" align="center">
                      <h3>Nudging EcoMode</h3>
                      
                      <img 
                        src={HarvestImages.improvementsNudging} 
                        alt="Nudging EcoMode UI"
                        className="space-item-below"
                      />
                    </Card>

                  </div>

              </div>

              <div id="prototype" className="subsection">
                <h2 className="subsection-title">Interactive Prototype</h2>

                  <p>
                    Below is the interactive Figma prototype in high and low-carbon version. Try it out!
                  </p>

                 <div className="text-center">
                    <Button href="https://www.figma.com/proto/q3yx8uwAVlllpeZM8U6t4n/harvest_portfolio?node-id=365-3782&p=f&viewport=-91%2C417%2C0.12&t=62Td4niYipk6loZ8-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=601%3A6978&show-proto-sidebar=1">
                      View Interactive Prototype ↗
                    </Button>
                  </div>

                  <p>
                    P.S. Most of my work was centered around the In Season section.
                  </p>

              </div>

            </Section>

            <Section id="reflection" title="Reflection">

                <div className="card-grid" style={{marginTop: "0"}}>
                  <Card
                    variant="beige" 
                    title="Successes"
                  >
                    <ul>
                      <li>We created a <mark>functioning prototype and fully fleshed service concept</mark></li>
                      <li><mark>My Figma skills have advanced significantly</mark></li>
                      <li>I was able to try out making low carbon designs and learned about carbon calculations</li>
                      <li>I got to try working with design sprints and liked it very much</li>
                    </ul>
                  </Card>

                  <Card 
                    variant="green" 
                    title="What needs improvement"
                  >
                    <ul>
                      <li>The product would need <mark class="mark-green">more extensive testing</mark></li>
                      <li>Adding filters and sorting</li>
                      <li>Adding recipes for seasonal products</li>
                      <li>Creating a producers page</li>
                      <li>We haven't thought about restaurants using local products, only about individual customers</li>
                    </ul>
                  </Card>
                </div>

              <div id="my-learnings" className="subsection">
                <h2 className="subsection-title">My Learnings</h2>
                  <div>
                    <Callout type="insight">
                      This was the first time I got to work using <mark>design sprints and an agile process.</mark> I now understand the motivation behind it as it 
                      makes it easier to see the bigger picture of the project and be able to iterate things at different stages.
                    </Callout>

                    <Callout type="insight">
                      I also <mark>significantly improved my Figma skills,</mark> especially in creating components, interactions, and working with design systems.
                    </Callout>
                    
                    <Callout type="insight">
                      <mark>Not using any AI in the age of AI</mark> was definitely a fun experiment. It helped me better understand where I actually need assistance 
                      from LLMs and where it is worth putting the effort and creating something myself completely from scratch. It also made me realize 
                      how often I impulsively turn to a chatbot when a quick search or a conversation with a teammate would actually be better.
                    </Callout>

                    <Callout type="insight">
                      The toughest moment for me was documentation. I often forgot why we made a certain decision in a meeting and had to circle back many 
                      times, which taught me a huge lesson: <mark>you have to write down every detail, even if it seems insignificant.</mark>
                    </Callout>

                    <Callout type="insight">
                      Working with our small team in person was great. It felt very productive, and I loved <mark>getting to contribute to every single stage of the project.</mark>
                    </Callout>

                    <Callout type="sustainability">
                      The most eye-opening aspect was <mark class="mark-light-green">learning about low-carbon design.</mark> Thinking about how to make screens energy-efficient was genuinely 
                      interesting, and I definitely want to explore that subject more. <mark class="mark-light-green">Learning low-carbon design fundamentally changed how I think about interfaces.</mark> 
                      Now I approach them not just visually, but also technically and ethically.
                    </Callout>
                  </div>
              </div>
            </Section>

          </div> {/* End container-readable */}
        </div> {/* End harvest-content-wrapper */}
      </div> {/* End theme-harvest */}
    </main>
  );
};

export default HarvestProject;