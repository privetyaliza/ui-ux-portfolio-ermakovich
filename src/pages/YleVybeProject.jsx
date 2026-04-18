import React, { useRef } from 'react';
import Section from '../components/reusable/Section';
import Callout from '../components/reusable/Callout';
import CollapsibleBox from '../components/reusable/CollapsibleBox';
import Card from '../components/reusable/Card';
import Button from '../components/reusable/Button';

import { VybeImages } from '../img/loaders/vybeimages';

import '../styles/project-base.css';

import '../styles/theme-vybe.css';
import '../styles/edit-highlight.css';

import SideNavigation from '../components/reusable/SideNavigation';

// const placeholder = (label, width = '100%', height = '320px') =>
//   `data:image/svg+xml,${encodeURIComponent(
//     `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
//       <rect width="100%" height="100%" fill="#E0DED8"/>
//       <text x="50%" y="50%" font-family="sans-serif" font-size="16" fill="#888" text-anchor="middle" dominant-baseline="middle">${label}</text>
//     </svg>`
//   )}`;


const VybeProject = () => {

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'context', title: 'Context' },
    { id: 'outcome', title: 'Design Outcome' },
    { id: 'research', title: 'Research', subItems: [
      { id: 'desk-research', title: 'Desk Research' },
      { id: 'market-research', title: 'Market Research' },
      { id: 'user-research', title: 'User Research' },
      { id: 'research-findings', title: 'Key Findings' },
    ]},
    { id: 'ideation', title: 'Ideation', subItems: [
      { id: 'hmw', title: 'How Might We?' },
      { id: 'crazy-8s', title: 'Crazy 8s' },
      { id: 'filtering', title: 'Filtering' },
      { id: 'pivot', title: 'The Pivot' },
      { id: 'the-idea', title: 'The Idea' },
    ]},
    { id: 'development', title: 'Development', subItems: [
      { id: 'decisions', title: 'Making Decisions' },
      // { id: 'use-case', title: 'Use Case Scenario' },
      { id: 'prompting', title: 'How we Prompted Ikon AI' },
      { id: 'prototype', title: 'Interactive Prototype' },
    ]},
    { id: 'reflection', title: 'Reflection' },
  ];

  return (
    <main className="page-container yle-vybe-page">
      <div className="project-page theme-vybe">

        {/* 1. HERO SECTION */}
        <div className='container-readable'>
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-title">Yle Vybe</h1>
              <p className="hero-subtitle">A music discovery app powered by Yle's journalism</p>
            </div>
            <img className="hero-image" src={VybeImages.hero} alt="Hero image for Yle Vybe project" />
          </div>
        </div>

        {/* 2. LOWER PAGE WRAPPER */}
        <div className="harvest-content-wrapper">

          <div className="sidebar-track">
            <SideNavigation sections={sections} />
          </div>

          <div className='container-readable'>

            {/* OVERVIEW */}
            <Section id="overview" title="Overview">
              <div className="card-grid">

                <Card variant="transparent" title="Event" align="center">
                  <div className="card-list">
                    <div>DASH Design Sprint</div>
                    <div>Theme: AI × Design</div>
                    <div>March 27–29, 2026</div>
                  </div>
                </Card>

                <Card variant="transparent" title="Team" align="center">
                  <div className="card-list">
                    <div>Liza Ermakovich</div>
                    <div>Nhi Kieu</div>
                    <div>Yuxuan Zhao</div>
                    <div>Katja Brandenburg</div>
                  </div>
                </Card>

                <Card variant="transparent" title="Tools" align="center">
                  <div className="card-list">
                    <div>Figma + Figma FigJam</div>
                    <div>Microsoft Office</div>
                    <div>IKON AI</div>
                    <div>Claude Code</div>
                    <div>Other AI Tools</div>
                  </div>
                </Card>

                <Card variant="transparent" title="My Role" align="center">
                  <div className="card-list">
                    <div>UX Research</div>
                    <div>UI Design</div>
                    <div>Prototyping</div>
                    <div>Development</div>
                  </div>
                </Card>
              </div>

              <div className="problem-solution-layout">
                <div>
                  <Card variant="beige" title="Problem">
                    <p>Music discovery is a wicked problem, and traditional methods like radio no longer work. Yle wanted 
                      to create a new format to bridge music discovery and young digital audiences in Finland.</p>
                  </Card>
                </div>

                <div className="arrow-container">
                    <img src={VybeImages.iconArrow} alt="arrow" />
                </div>

                <div>
                  <Card variant="green" title="Solution">
                    <p>A service powered by Yle's music journalism. One song a day, same for everyone in Finland. 
                      We reimagined music discovery so that fits into life instead of demanding extra effort from it.</p>
                  </Card>
                </div>
              </div>

              <div id="ai-tools" className="subsection">
                <h2 className="subsection-title">Working with AI</h2>
                <p style={{ marginBottom: '-3vh' }}>
                  We took the AI × Design seriously and really implemented AI-assisted design in practice. Here's how different
                  tools mapped to different stages:
                </p>

                <div className="card-grid">
                  <Card variant="transparent" title="Research">
                    <div style={{ display: 'flex', gap: '-8px'}}>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.perplexity} alt="Perplexity logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Perplexity</span>
                      </div>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.claude} alt="Claude logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Claude</span>
                      </div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Ideation & Design">
                    <div style={{ display: 'flex', gap: '-8px'}}>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.make} alt="Figma Make logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Figma Make</span>
                      </div>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.stitch} alt="Google Stitch logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Google Stitch</span>
                      </div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Prototyping">
                    <div style={{ display: 'flex', gap: '-8px'}}>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.ikon} alt="Ikon AI logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>IKON AI</span>
                      </div>
                      <div className="tool-icon-placeholder" style={{ margin: '0 -6px 0 0' }}>
                        <img src={VybeImages.claude} alt="Claude Code logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Claude Code</span>
                      </div>
                      <div className="tool-icon-placeholder" style={{ margin: '0 0 0 0' }}>
                        <img src={VybeImages.copilot} alt="Microsoft Copilot logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Microsoft Copilot</span>
                      </div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Pitching">
                    <div style={{ display: 'flex', gap: '-8px'}}>
                      <div className="tool-icon-placeholder" style={{ margin: '0' }}>
                        <img src={VybeImages.gemini} alt="Gemini logo" className="tool-icon-img" style={{ width: '48px', height: '48px'}} />
                        <span className="tool-tooltip" style={{ padding: '6px 10px' }}>Gemini</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Section>

            {/* CONTEXT */}
            <Section id="context" title="Context">
              <p>
                DASH is a 3-day design sprint (similar to a hackathon) organized at Valo Hotel & Work Helsinki. The theme of the 2026 sprint was
                AI × Design. Our client was Yle — Finland's national public broadcaster — and more specifically its music division Yle Musiikki. 
                Our international team of 4 came from business, marketing, design & technology backgrounds.
              </p>

              <Callout type="purple" title="The Yle Excursion">
                <p>
                  Before the sprint, we visited Yle Musiikki's office with an excursion. Their mission is to bridge diverse music culture to all Finns, 
                  but their biggest struggle is reach: young people know Yle exists, they just don't interact with it. Their goal was to become
                  the most influential digital music media for young adults in Finland.
                </p>
              </Callout>

              <div id="initial-discovery" className="subsection">
                <h2 className="subsection-title">Initial Discovery</h2>
                <p>
                  After the excursion, we had a short meeting to map out the problem space and share our initial impressions, 
                  questions, and hypotheses. 
                </p>
                <div className="media-group">
                  <img src={VybeImages.initialDiscovery} alt="Initial discovery board in FigJam" />
                  <span className="caption">Our initial discovery board in FigJam</span>
                </div>
              </div>

              <div id="brainstorming" className="subsection">
                <h2 className="subsection-title">Brainstorming</h2>
                <p>
                  We then did a very free-form brainstorming session before the sprint started. This helped us prevent
                  a blank-page start on day 1.
                </p>
                <div className="media-group">
                  <img style={{ borderRadius: '24px' }} src={VybeImages.brainstorming} alt="Brainstorming session in FigJam" />
                  <span className="caption">The brainstorming results in FigJam</span>
                </div>
              </div>
            </Section>

            {/* DESIGN OUTCOME */}
            <Section id="outcome" title="Design Outcome">
              <img width="140vw" className="img-wide" src={VybeImages.designOutcome} alt="Design outcome showing Yle Vybe app screens" />
            </Section>

            {/* RESEARCH */}
            <Section id="research" title="Research"
              intro={
                <p>
                  Even in a 3-day sprint, we chose to invest the first day heavily in research. We knew that 
                  in the later stages research insights would be crucial while prototyping would be significantly
                  compressed with the help of AI tools.
                </p>
              }
            >

              <div id="desk-research" className="subsection">
                <h2 className="subsection-title">Desk Research</h2>
                <p>
                  We each took a different angle on desk research to cover more ground quickly. Key areas we explored: how do people actually 
                  discover music today, what does being a public service mean for Yle in terms of popularizing new music, and what does the 
                  data say about music consumption habits among young Finns. I focused on understanding the landscape of music discovery 
                  behavior and looking at the numbers.
                </p>
                <div className="media-group">
                  <img style={{ borderRadius: '24px' }} src={VybeImages.deskResearch} alt="Desk research findings on music discovery and statistics" />
                  <span className="caption">Desk research on music discovery and facts & figures.</span>
                </div>
              </div>


              <div id="market-research" className="subsection">
                <h2 className="subsection-title">Market Research</h2>
                <p>
                  We conducted a detailed research process to identify where Yle could provide a unique value proposition. 
                  Our goal was to find a gap rather than compete head-to-head with commercial platforms.
                </p>

                  <p>
                    We began by analyzing three pillars of the music ecosystems:
                  </p>
                  <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '1rem' }}>
                    <div>
                      <h4 style={{color: "var(--color-accent-secondary)"}}>Music Broadcasting</h4>
                      <p>Streaming drives music discovery and revenue, using AI and digital networks to manage millions of tracks and build fan connections.</p>
                    </div>
                    <div>
                      <h4 style={{color: "var(--color-accent-secondary)"}}>Music Journalism</h4>
                      <p>Music journalism has moved to digital blogs and social media, focusing on artist news and industry data. There is a big trend on in-depth, original storytelling</p>
                    </div>
                    <div>
                      <h4 style={{color: "var(--color-accent-secondary)"}}>The Finnish Market</h4>
                      <p>Finland’s €1.4 billion music market is led by live events and digital streaming, with funding shifting from public to private sources.</p>
                    </div>
                  </div>

                <div className="media-group">
                  <img style={{ borderRadius: '24px' }} src={VybeImages.marketResearch} alt="Industry analysis and competition mapping" />
                  <span className="caption">Our research board used for industry mapping and feature benchmarking.</span>
                </div>

                  <p>
                    When it came to benchmarking, we evaluated over 15 services and media outlets and recognized four distinct categories to find inspiring features:
                  </p>
                  
                  <div className="card-grid">
                    <Card variant="beige" title="Big platforms">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                        <img src={VybeImages.spotify} alt="Spotify logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                        <img src={VybeImages.youtube} alt="YouTube logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                      </div>
                      <strong>Spotify and YouTube Music</strong> optimize for speed and retention. They provide the music but all of the discovery there is algorithmic.
                    </Card>

                    <Card variant="beige" title="Traditional radio">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                        <img src={VybeImages.radiocult} alt="Spotify logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                        <img src={VybeImages.bbc} alt="YouTube logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                      </div>
                      <strong>BBC Sounds and Radio Cult</strong> are in the same realm as Yle Radio. These services offer high-quality content but often face high friction for mainstream youth.
                    </Card>

                    <Card variant="beige" title="Fan-artist interaction">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                        <img src={VybeImages.weverse} alt="Spotify logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                        <img src={VybeImages.netease} alt="YouTube logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                      </div>
                      <strong>Weverse</strong> and <strong>NetEase</strong> give direct artist interaction build emotional connection. This creates engagement but requires the user to already know the artist.
                    </Card>
                    
                    <Card variant="beige" title="Music discovery apps">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                        <img src={VybeImages.orbit} alt="Spotify logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                        <img src={VybeImages.chosic} alt="YouTube logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
                      </div>
                      <strong>Orbit and Chosic</strong> are tools that facilitate discovery through playlist analysis and mood-based recommen- dations.
                    </Card>

                    {/* <Card variant="beige" title="Music discovery apps">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                        <div style={{ width: '24px', height: '24px', background: '#ccc', borderRadius: '4px' }}></div> 
                        <div style={{ width: '24px', height: '24px', background: '#ccc', borderRadius: '4px' }}></div>
                      </div>
                      We tested tools like <strong>Orbit and Chosic</strong> that facilitate discovery through playlist analysis and mood-based recommendations.
                    </Card> */}
                  </div>

                  {/* <Callout type="purple">
                    <strong>The Conclusion:</strong> We identified that while platforms have the music and media has the story, they are [rarely connected in a single, zero-friction moment. Yle Vybe was designed to bridge this exact gap by delivering lore-driven discovery directly to the mobile routine.
                  </Callout> */}
                </div>

              <div id="user-research" className="subsection">
                <h2 className="subsection-title" id="user-research">User Research</h2>
                <p>
                  Since we only had 48 hours and no access to real users, we had to get creative. We shot a few anonymous questions on Jodel 
                  (a popular social app among Finnish youngsters) and asked them upfrontly: "What do you think abotu Yle's content?". We wanted 
                  to get real and unfiltered answers, and this ended up being a really good approach. We discovered that a lot of young adults are
                  well aware that Yle's content exists but they do not consume it. 
                </p>
                <img src={VybeImages.userResearch} alt="User research sources: Jodel insights" />
                <span className="caption">The question we asked and some answers we got on Jodel.</span>
                <p>
                  We then took time to talk to the mentors from Yle who were present on the site to get a better understanding of how they see their 
                  users and what are the key pain points from their perspective. From that conversation, we learned that the main reason why young 
                  people don't consume the large library of Yle's content is because of the friction of accessing it. They are used to having music 
                  and music-related content in the same place, and they don't want to go out of their way to access Yle's journalism separately 
                  from their music streaming.
                </p>

                <Callout type="purple">
                  Yle is not trying to compete with Spotify, but the fact that their content is not integrated into the 
                  music experience makes it invisible to young people.
                </Callout>
              </div>

                <h2 className="subsection-title" id="research-findings">Key Findings</h2>

                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding">
                      <p>It always starts with a song. Music discovery isn't driven by searching for new artists,
                        it's almost always triggered by stumbling across a track.</p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>The entry point must be a song, not a recommendation engine or an artist profile.
                        Start with audio and let context follow.</p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding">
                      <p>Young people don't put extra effort into discovering new music. They rely mostly on recommendations - 
                        be it from algorithms, friends, or social media. For them, discovery is a byproduct of other activities, 
                        not a standalone activity.
                      </p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>The service cannot require active effort to initiate. It must insert itself into an already 
                        existing habit.</p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout">
                  <div>
                    <Card variant="green" title="Finding">
                      <p>Artist's personality is an important factor in music discovery. Getting to know the person
                        behind the music deepens connection. This is exactly where Yle's music journalism can add value.</p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>Yle's rich content library isn't just a side aspect but rather a core differentiator. Every piece of music
                        in our solution should come with a human story attached. Spotify can't (or doesn't) invite artists for interviews 
                        or write articles about them, but for Yle Musiikki that's a daily job.</p>
                    </Card>
                  </div>
                </div>
                <div className="problem-solution-layout">
                  <div>
                    <Card variant="green" title="Finding">
                      <p>Yle Musiikki is a public service, which means it doesn't need to rely on ads and monetization to function.
                         It also has a greater mission of promoting the Finnish music culture and supporting artists. Unlike on other 
                         platforms, the artists don't pay Yle to be featured, instead Yle pays them for their time on air.
                      </p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>Yle has is a unique advantage that can shape the product in a different way than commercial platforms. We should
                        absolutely use this superpower to promote young Finnish artists without worrying about whether they already have a 
                        mass appeal or not. 
                         </p>
                    </Card>
                  </div>
                </div>
            </Section>

            {/* IDEATION */}
            <Section id="ideation" title="Ideation"
              intro={
                <p>
                  Research gave us three nice findings, and now it was time to turn them into a concrete solution. 
                  We only had one afternoon for that, so we had to do it rapidly.
                </p>
              }
            >

              <div id="hmw" className="subsection">
                <h2 className="subsection-title">How Might We?</h2>
                <p>
                  We used the "How Might We?" method to understand the variables involved in the problem better. We first formed a broad 
                  "How Might We?" question and then broke it down into parts to guide our ideation: 
                </p>
                <img style={{borderRadius: '16px'}} src={VybeImages.hmw} alt="How Might We breakdown" />
                <span className="caption">How Might We? breakdown and discussion</span>
                {/* <div className="card-grid">
                  <Card variant="beige">
                    <em>"How might we make discovering new music feel effortless rather than like homework?"</em>
                  </Card>
                  <Card variant="beige">
                    <em>"How might we define what 'new' actually means to a young person?"</em>
                  </Card>
                  <Card variant="beige">
                    <em>"How might we make Yle's editorial voice feel personal rather than institutional?"</em>
                  </Card>
                  <Card variant="beige">
                    <em>"Who exactly are 'young people' — and are they one audience or several?"</em>
                  </Card>
                </div> */}
                <p>We ended up with the specific question:</p>
                <Callout type="lime">
                  "How might we modernize interaction with Yle's music content for 20-30 y/o Finns to find new/unknown music and artists?"
                </Callout>
              </div>

              <div id="crazy-8s" className="subsection">
                <h2 className="subsection-title">Crazy 8s</h2>
                <p>
                  We ran a fast Crazy 8s round and generated about 30 ideas with it. It was interesting how differently each of us
                  expressed their ideas: some were in text, some in visuals, some in a mix of both. Here is a glimpse into mine:
                </p>
                <img style={{borderRadius: '16px'}} src={VybeImages.crazy8s} alt="Crazy 8s ideation sketches" />
                <span className="caption">Some of my Crazy 8s sketches. We had a lot of fun with this part.</span>
              </div>

              <div id="filtering" className="subsection">
                <h2 className="subsection-title">Filtering</h2>
                <p>
                  We then went through a few rounds of filtering and clustering the ideas. First, we did an axis positioning exercise. 
                  The axes we chose were old-new (solution) and physical-digital (platform). Then, we only focused on the cluster of ideas 
                  that were both new and digital, since that felt like the most perspective area for Yle.
                </p>
                <img src={VybeImages.filtering} alt="Filtering map: old-new vs physical-digital" />
                <span className="caption">The axis positioning exercise helped us visualize the landscape of ideas and identify the most promising one.</span>
                <p>
                  That exercise reduced our idea space to about 15 ideas. That is still too many for a 1.5 day development timeline, 
                  so we did another filtering - by cross-checking every idea against the original requirements from Yle and our specifications
                  from the "How Might We?" exercise. That left us with 10 ideas, but we still felt pretty stuck and felt like that was not "it".
                </p>
              </div>

              <div id="pivot" className="subsection">
                <h2 className="subsection-title">The Pivot</h2>
                <p>
                  At this point, we took a pause and really thought: are we even thinking about this correctly? After a brief but 
                  meaningful conversation with one of the mentors from DASH, we realized that we were missing a very important part 
                  of the puzzle: user context. We had a good understanding of the problem, the target users, and the requirements, 
                  but we didn't have a clear picture of the types of situations in which our solution would live. Without that, we were 
                  designing in a vacuum.
                </p>

                <Callout type="purple" title="The Commute Finding">
                  <p>
                    We looked into an average day in life of a young Finnish person. The 2 main moments when they listen to (and discover)
                    music are: 
                    </p>
                    <div className='card-grid'>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{color: "#A78BFA", fontSize: '18px', fontWeight: '600', minWidth: '24px'}}>1</span>
                          <h3 style={{color: "white", margin: '0'}}>When they go to work/school</h3>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{color: "#A78BFA", fontSize: '18px', fontWeight: '600', minWidth: '24px'}}>2</span>
                          <h3 style={{color: "white", margin: '0'}}>When they return from work/school</h3>
                        </div>
                    </div>
                  <p>
                    So essentially - commute. Commute should be the entry point for our solution. It is when the person is in transition 
                    and solitude and almost always has their headphones on, which makes them more open to new experiences. Yle could insert 
                    itself into that moment and become part of the routine, rather than trying to create a new one.
                  </p>
                </Callout>
              </div>

              <div id="the-idea" className="subsection">
                <h2 className="subsection-title">✦ The Idea</h2>

                <Callout type="lime" title="Vybe">
                  <p>
                    Use Yle's content about music to deliver one song during the daily commute. The experience is seamlessly integrated 
                    into the moment young people are already reaching for their headphones. No extra effort required.
                  </p>
                </Callout>
                <img src={VybeImages.idea} alt="The Vybe pitch" />

                <div className="card-grid">
                  <Card variant="shadowed" title="Yle's content, not Yle's catalog">
                    The focus is on content <em>about</em> music (interviews, artist stories, context) not on
                    competing with streaming platforms.
                  </Card>
                  <Card variant="shadowed" title="Passive by design">
                    Discovery happens during a moment that already exists in the user's day. It is one click away.
                  </Card>
                </div>
              </div>

            </Section>

            {/* DEVELOPMENT */}
            <Section id="development" title="Development"
              intro={
                <p>
                  We had one night and one morning to make it into a working prototype, and this is where the
                  AI × Design theme materialized. I took on the responsibility over all the development (actual coding & prompting work)
                  since I had the most experience with programming and AI tools. This ended up being very rewarding.
                </p>
              }
            >

              <div id="decisions" className="subsection">
                <h2 className="subsection-title">Making Decisions</h2>
                <p>
                  Before touching any tool, we spent time resolving the key design questions that would shape
                  everything later on:
                </p>

                <div className="card-grid">
                  <Card variant="green" title="Same song or personalized?">
                    Should every user receive the same editorial pick, or should the song be personalized? We
                    landed on a shared song of the day as it creates a sense of collective discovery, which
                    aligns with Yle's public service identity and differentiates it from commercial algorithmic platforms.
                  </Card>
                  <Card variant="green" title="Frequency">
                    A song per day vs. per commute vs. per opening the app? We chose one song per day that would be connected to (usually)
                    the morning commute, making the habit easy and predictable. It also aligned well with our intention to turn those songs
                    into conversation topics which would create a sense of community around Yle.
                  </Card>
                </div>
                <div className="card-grid" style={{ marginTop: '-2vh' }}>
                  <Card variant="green" title="How to detect the commute?">
                    Options included location data, phone motion sensors, or headphone connection detection.
                    We decided to go with the first headphone connection of the day as it is the most privacy-friendly strategy. However,
                    we also decided to leave the user a choice to trigger the experience manually by making the notification a "live activity"
                    widget.
                  </Card>
                  <Card variant="green" title="Streaming integration">
                    Yle's mentors didn't want the app to be just a bridge to Spotify, they wanted a standalone experience. This pushed us 
                    to rethink the streaming integration and use Yle's own content to share songs. We realized their podcasts and radio 
                    shows already feature full tracks, so we used those as our music source. That way, users get the music while interacting with 
                    Yle’s content at the same time - it's a win-win.
                  </Card>
                </div>

                <p>Some of the UX decisions that shaped the final screens:</p>

                <div className="card-grid">
                  <Card variant="beige" title="Broadcast context">
                    We made it explicitly clear that the song is part of a Yle broadcast episode, not just a
                    track recommendation. This connects the song to Yle's music journalism.
                  </Card>
                  <Card variant="beige" title="Artist personality">
                    Each song includes a short message from the artist and a direct link to Yle's about them if there is one. 
                    The song gets them in. The story keeps them listening.
                  </Card>
                  <Card variant="beige" title="Gamification">
                    We added a streak feature to reward consistency, but designed it so that the user doesn't feel guilty about missing a day.
                    The streak history also serves as a personal archive of past songs.
                  </Card>
                </div>
              </div>

              {/* <div id="use-case" className="subsection edit-highlight">
                <h2 className="subsection-title">Use Case Scenario</h2>
                <p>
                  To pressure-test the experience, we wrote out a concrete scenario before designing a single screen:
                </p>

                <Card variant="beige" title="Katja, 8:04am">
                  <p>
                    Katja leaves her apartment and heads to the bus stop. She puts in her headphones. Vybe
                    detects the connection and sends a gentle notification: <em>"Your morning song is ready."</em> She
                    taps it without breaking stride. A Finnish indie artist she's never heard of starts playing.
                    By the time she reaches the bus, she's already read two lines about who the artist is. She
                    saves the song to Spotify. Her streak is now 4 days.
                  </p>
                </Card>

                <CollapsibleBox type="purple" title="Edge case: no commute">
                  <p>
                    Not everyone commutes. For users who don't, Vybe sends a scheduled notification at a
                    user-set time — for example, 8pm: <em>"Fancy a walk? We've got a new Finnish artist for you."</em>
                    The song is the same; only the delivery moment changes.
                  </p>
                </CollapsibleBox>
              </div> */}

              <div className="subsection" id="prompting">
                <h3 className="subsection-title">How we prompted IKON AI</h3>

                <p>
                  I was the only person on the team with programming experience, which meant I wore both the developer and designer hats 
                  during prototyping. Ikon AI is a Finnish startup that can generate working AI apps, comparing decisions from over a hundred 
                  of models. We used it in collaboration with Claude Code to create our prototype, and it was definitely helpful in the limited 
                  time setting. However, getting good results from it required a lot of prompting work. Here are some of the strategies 
                  we arrived at:
                </p>

                <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-accent-primary)', minWidth: '48px' }}>1</div>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: 'var(--color-accent-primary)' }}>Feed the brand guidelines</h4>
                      <p>
                        Before anything else, we gave IKON Yle's design guidelines. This step was important for us because we wanted our 
                        solution to "look like Yle", especially knowing that AI-aided designs usually look very generic. 
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-accent-primary)', minWidth: '48px' }}>2</div>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: 'var(--color-accent-primary)' }}>First plan, then build</h4>
                      <p>
                        We first asked Claude to create a plan: what screens do we need? What are the key interactions? 
                        Once we had that, we could review the plan and give feedback on it before any code was generated. That made the whole process much more efficient.
                      </p>
                      <div style={{ marginTop: '12px', marginBottom: '-16px' }}>
                        <CollapsibleBox type="lime" title="Initial wireframes">
                          <p>
                            When we tried buiding exclusively based on text prompts, the results we were getting were too generic and difficult to debug. 
                            Thus, we decided to give IKON a more visual starting point by feeding it some rough wireframes. That way, it was also 
                            easier to point at specific elements and move things around.
                          </p>
                          <div style={{ display: 'flex', gap: '48px', marginTop: '16px' }}>
                            <img src={VybeImages.front} alt="Front screen of Yle Vybe" style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '12px', objectFit: 'contain' }} />
                            <img src={VybeImages.streaks} alt="Streaks screen of Yle Vybe" style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '12px', objectFit: 'contain' }} />
                          </div>
                        </CollapsibleBox>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-accent-primary)', minWidth: '48px' }}>3</div>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600', color: 'var(--color-accent-primary)' }}>Iterate, iterate, iterate</h4>
                      <p>
                        We iterated over the screens a lot, and AI made it a lot easier. For example, we asked it to make the "Listen to episode" 
                        button more prominent, or to change the transparency of songs in the streak section. Here are a few steps of our interation process:
                      </p>
                      <img src={VybeImages.iteration} alt="Iteration steps of the front screen"/>
                    </div>
                  </div>
                </div>

                <Callout type="purple" title="The dark theme insight">
                  <p>
                    One good example was the dark theme. We hadn't planned for it at first, but we realized that checking a bright screen at 8 am 
                    on a bus feels overwhelming. Since young people increasingly prefer dark mode anyway, we asked IKON to try a dark version
                    (while keeping Yle's accent colors). It felt much more youthful and less aggressive, so we stuck with that.                    </p>
                </Callout>
              </div>

              <div id="prototype" className="subsection">
                <h2 className="subsection-title">Interactive Prototype</h2>
                <p>
                  Below is the working prototype of Yle Vybe and its video demo. Unlike a Figma click-through, this is a
                  functional build with real interactions and screens.
                </p>

                <div className="card-grid" style={{ marginTop: '24px' }}>
                  <Card variant="beige" title="Try it live">
                    <p style={{ marginBottom: '16px'}}>All interactions are functional. Best to open on mobile or with a phone frame in developer tools!</p>
                    <Button href="https://test-4a6d7eee.ikonai.app/">
                      Open the Website ↗
                    </Button>
                  </Card>

                  <Card variant="lime" title="Watch the demo">
                    <p style={{ marginBottom: '16px'}}>See a walkthrough of the key features in 43 seconds.</p>
                    <Button href="https://drive.google.com/file/d/1L9YaiyzitQyTvHC0qwBj-02ELijT2kp5/view">
                      View Video ↗
                    </Button>
                  </Card>
                </div>
              </div>

            </Section>

            {/* REFLECTION */}
            <Section id="reflection" title="Reflection">

              <div className="card-grid" style={{marginTop: "0"}}>
                <Card variant="beige" title="Successes">
                  <ul>
                    <li>We did research even when we were short on time, which gave us a much clearer understanding of the problem.</li>
                    <li>Looking into the day of a young Finn made every subsequent design decision easier.</li>
                    <li>AI tools let us make a working prototype faster and iterate more efficiently.</li>
                    <li>Having diverse perspectives on the team helped us identify a unique approach to the problem.</li>
                    <li>Even though we didn't end up winning the challenge, our solution got was mentioned among the top 3 winner candidates among 14 different solutions.</li>

                  </ul>
                </Card>

                <Card variant="green" title="Potential improvements">
                  <ul>
                    <li>Put more thought into the streak feature. Right now it's not very engaging.</li>
                    <li>How would Yle staff actually pick and schedule songs each day? We never figured out the producer side.</li>
                    <li>There is no real social element to the app except for the artist's message feature. There definitely could be a way for users to connect and share their experiences.</li>
                    <li>The transition between the song and the episode needs testing. What if the user just closes the app after they've heard the song?</li>
                  </ul>
                </Card>
              </div>

              <div id="my-learnings" className="subsection">
                <h2 className="subsection-title">My Learnings</h2>

                <Callout type="lime">
                  One of the best insights we had came not from any of our research but from a casual conversation. We were stuck, 
                  so we took a step back and started describing how our own mornings looked. It turned out that 
                  4 people from 4 different countries all reached for their headphones at roughly the same 
                  moment of the day. I don't think AI could have given us that insight.
                </Callout>

                <Callout type="lime">
                  I am happy that we still invested a lot of effort into research. With AI, there is a big temptation to go directly into creating. 
                  Spending the first day on research gave us actual criteria to check our outputs against. This took a huge weight off our shoulders 
                  when developing an MVP.
                </Callout>

                <Callout type="purple">
                  Without a doubt, AI makes processes faster. The thing is that this speed comes with
                  a massive bias. When the interface looks beautiful, we are less tempted to question it. UX problems that are covered in layers 
                  of decoration are harder to notice, and thus to address.
                </Callout>

                <Callout type="purple">
                  AI is good for getting an MVP in front of people fast. For a 3-day sprint, it's close 
                  to perfect. For a real product, AI is one tool among many, and the human decides when to use it and when not to.
                </Callout>

                <Callout type="purple">
                  Taking care of both design and development meant I was debugging in one tab and adjusting Figma screens in another. 
                  It was tiring, but the boundary between design and development is disappearing anyway these days, and this sprint made me 
                  take that more seriously.
                </Callout>

                <Callout type="lime">
                  Coursework taught me to justify my decisions, and a sprint like DASH taught me to make them. They are 
                  different skills, and I hadn't fully noticed the gap between them until I had to work under such pressure.
                  I am happy that I got to practice trusting my instincts and getting them challenged at the same time.
                </Callout>

              </div>
            </Section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default VybeProject;