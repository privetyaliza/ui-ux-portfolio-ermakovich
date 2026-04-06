import React, { useRef } from 'react';
import Section from '../components/reusable/Section';
import Callout from '../components/reusable/Callout';
import CollapsibleBox from '../components/reusable/CollapsibleBox';
import Card from '../components/reusable/Card';
import Button from '../components/reusable/Button';

import { VybeImages } from '../img/loaders/vybeimages';

import '../styles/project-base.css';
import '../styles/theme-vybe.css';

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
      { id: 'axis-positioning', title: 'Axis Positioning' },
      { id: 'pivot', title: 'The Pivot' },
      { id: 'the-idea', title: 'The Idea' },
    ]},
    { id: 'development', title: 'Development', subItems: [
      { id: 'decisions', title: 'Making Decisions' },
      { id: 'use-case', title: 'Use Case Scenario' },
      { id: 'ai-tools', title: 'Working with AI' },
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
                    <div>Figma + Figma Make</div>
                    <div>IKON AI</div>
                    <div>Claude Code</div>
                    <div>Google Stitch</div>
                    <div>Perplexity</div>
                  </div>
                </Card>

                <Card variant="transparent" title="My Role" align="center">
                  <div className="card-list">
                    <div>UX Research</div>
                    <div>UI Design</div>
                    <div>Prototyping & Development</div>
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
                  Before the sprint, we visited Yle's office with an excursion. [Describe what Yle struggled with from Figma]
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
                  <span className="caption">My part of desk research on music discovery and facts & figures.</span>
                </div>
              </div>

              <div id="market-research" className="subsection">
                <h2 className="subsection-title">Market Research</h2>
                <p>
                  We mapped the existing landscape to understand where Yle could find a gap rather than compete head-on with platforms 
                  that have vastly more resources and profit motivations.
                </p>

                <div className="media-group">
                  <img style={{ borderRadius: '24px' }} src={VybeImages.marketResearch} alt="Market research findings on the music discovery landscape" />
                  <span className="caption">A wide market research on similar services, features, and inspiring examples.</span>
                </div>

                <div className="card-grid">
                  <Card variant="beige" title="Spotify / Apple Music">
                    Algorithm-driven discovery optimized for retention. Reinforces taste rather than expanding it.
                    No editorial voice or human curation context.
                  </Card>

                  <Card variant="beige" title="YouTube">
                    Discovery happens accidentally via recommendations. Rich context (comments, descriptions) but
                    no structured editorial layer.
                  </Card>

                  <Card variant="beige" title="Social media (TikTok, Instagram)">
                    Highly effective at surfacing new songs, but context is stripped. You hear the hook, not the
                    story behind the artist.
                  </Card>

                  <Card variant="beige" title="Yle Areena">
                    Deep editorial content about Finnish music. Almost no discoverability for young audiences who
                    aren't actively seeking it out.
                  </Card>
                </div>

                <Callout type="purple">
                  Every existing platform either has the music without the story, or the story without a natural
                  moment to encounter it. Yle has both — they just haven't been connected.
                </Callout>
              </div>

              <div id="user-research" className="subsection">
                <h2 className="subsection-title">User Research</h2>
                <p>
                  To get closer to real behavior, we looked at Jodel — an anonymous Finnish social platform — to
                  find unfiltered conversations about music habits among young people. We also spoke directly with
                  Yle's representatives, who shared their own audience research and frustrations about reaching
                  younger demographics.
                </p>
                <img src={VybeImages.userResearch} alt="User research sources: Jodel and Yle audience insights" />
              </div>

              <div id="research-findings" className="subsection">
                <h2 className="subsection-title">Key Findings</h2>

                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding 1">
                      <p>It always starts with a song. Music discovery isn't driven by searching for new artists —
                        it's triggered by stumbling across a track that resonates.</p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>The entry point must be a song, not a recommendation engine or an artist profile.
                        Lead with audio, let context follow.</p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout" style={{marginBottom: "24px"}}>
                  <div>
                    <Card variant="green" title="Finding 2">
                      <p>Young people don't put extra effort into discovering new music. Discovery happens
                        passively, as a byproduct of doing something else.</p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>The service cannot require active effort to initiate. It must insert itself into an
                        existing habit, not create a new one.</p>
                    </Card>
                  </div>
                </div>

                <div className="problem-solution-layout">
                  <div>
                    <Card variant="green" title="Finding 3">
                      <p>An artist's personality is an important factor in music discovery. Knowing the human
                        behind the sound deepens connection. This is exactly where Yle's music journalism excels.</p>
                    </Card>
                  </div>
                    <div className="arrow-container">
                        <img src={VybeImages.iconArrow} alt="arrow" />
                    </div>
                  <div>
                    <Card variant="beige" title="Design Implication">
                      <p>Yle's editorial library isn't a nice-to-have — it's the core differentiator. Every
                        song should come with a human story attached.</p>
                    </Card>
                  </div>
                </div>

              </div>
            </Section>

            {/* IDEATION */}
            <Section id="ideation" title="Ideation"
              intro={
                <p>
                  Research gave us three sharp findings. Ideation was about turning them into a product direction —
                  fast. We had one afternoon.
                </p>
              }
            >

              <div id="hmw" className="subsection">
                <h2 className="subsection-title">How Might We?</h2>
                <p>
                  We reframed our research findings as "How Might We" questions to open up solution space without
                  locking in too early. Some of the questions we wrestled with:
                </p>
                <div className="card-grid">
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
                </div>
              </div>

              <div id="crazy-8s" className="subsection">
                <h2 className="subsection-title">Crazy 8s</h2>
                <p>
                  We ran a fast Crazy 8s round to generate a wide range of concepts before converging. The
                  constraint of 8 ideas in 8 minutes forced us past the obvious answers — the first three
                  ideas from everyone looked almost identical; the interesting ones emerged in squares five through eight.
                </p>
                <img src={VybeImages.crazy8s} alt="Crazy 8s ideation sketches" />
              </div>

              <div id="axis-positioning" className="subsection">
                <h2 className="subsection-title">Axis Positioning</h2>
                <p>
                  [Describe the axis positioning exercise here. The axes you used were old–new and physical–digital.
                  Explain what you mapped, what clusters emerged, and what the exercise revealed about where an
                  interesting opportunity space might be.]
                </p>
                <img src={VybeImages.axisPositioning} alt="Axis positioning map: old-new vs physical-digital" />
              </div>

              <div id="pivot" className="subsection">
                <h2 className="subsection-title">The Pivot</h2>
                <p>
                  At this point, we realized we had a problem. We understood what was missing from existing
                  services, but we didn't know enough about the user's actual daily life to know <em>when</em> and
                  <em> where</em> a new touchpoint could realistically fit. Without that, we were designing in a vacuum.
                </p>

                <Callout type="purple" title="The Commute Finding">
                  <p>
                    [Describe what you discovered about the day of a young Finnish person — and specifically the
                    commute insight. How did you arrive at it? Was it from research, from a conversation in the
                    room, from the Jodel data? What made the commute feel like the right behavioral entry point?]
                  </p>
                </Callout>

                <p>
                  Having a real behavioral entry point gave us a fresh start. Instead of asking "where should this
                  live?", we could now ask "how should this feel at 8am, with headphones in, on a bus?"
                </p>
              </div>

              <div id="the-idea" className="subsection">
                <h2 className="subsection-title">✦ The Idea</h2>

                <Callout type="lime" title="Vybe">
                  <p>
                    Use Yle's existing content library — not as a music streaming service, but as a journalism
                    platform — to deliver one song per commute. The experience is seamlessly integrated into the
                    moment young people are already reaching for their headphones. No extra effort required.
                  </p>
                </Callout>

                <div className="card-grid">
                  <Card variant="shadowed" title="Yle's content, not Yle's catalog">
                    The focus is on content <em>about</em> music — journalism, artist stories, context — not on
                    competing with Spotify as a streaming platform.
                  </Card>
                  <Card variant="shadowed" title="Passive by design">
                    Discovery happens during a moment that already exists in the user's day. The app doesn't
                    demand a new habit; it rides an old one.
                  </Card>
                </div>
              </div>

            </Section>

            {/* DEVELOPMENT */}
            <Section id="development" title="Development"
              intro={
                <p>
                  With the concept locked, we had roughly a day and a half to make it real. This is where the
                  AI × Design theme became literal.
                </p>
              }
            >

              <div id="decisions" className="subsection">
                <h2 className="subsection-title">Making Decisions</h2>
                <p>
                  Before touching any tool, we spent time resolving the key design questions that would shape
                  everything downstream:
                </p>

                <div className="card-grid">
                  <Card variant="beige" title="Same song or personalized?">
                    Should every user receive the same editorial pick, or should the song be personalized? We
                    landed on a shared song of the day — it creates a sense of collective discovery, which
                    aligns with Yle's public service identity.
                  </Card>
                  <Card variant="beige" title="Frequency">
                    A song per day vs. per commute vs. several per week? We chose one song per commute
                    (morning), making the habit predictable without being overwhelming.
                  </Card>
                  <Card variant="beige" title="How to detect the commute?">
                    Options included location data, phone motion sensors, or headphone connection detection.
                    [Describe which approach you chose and why.]
                  </Card>
                  <Card variant="beige" title="Streaming integration">
                    We decided to integrate with Spotify and other streaming services so users could save songs
                    directly to their existing library — removing friction and avoiding the need to build a
                    separate player.
                  </Card>
                </div>

                <p>Some of the UX decisions that shaped the final screens:</p>

                <div className="card-grid">
                  <Card variant="green" title="Broadcast context">
                    We made it explicitly clear that the song is part of a Yle broadcast episode — not just a
                    track recommendation. This connects the song to Yle's editorial credibility.
                  </Card>
                  <Card variant="green" title="Artist personality">
                    Each song includes a short message from the artist and a direct link to Yle's journalism
                    about them. The song is the hook; the story is the depth.
                  </Card>
                  <Card variant="green" title="Guilt-free streaks">
                    We added a streak feature to reward consistency — but designed it so missing a day doesn't
                    feel punishing. The streak history also serves as a personal archive of songs discovered.
                  </Card>
                </div>
              </div>

              <div id="use-case" className="subsection">
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
              </div>

              <div id="ai-tools" className="subsection">
                <h2 className="subsection-title">Working with AI</h2>
                <p>
                  The AI × Design theme wasn't just the brief — it was our actual workflow. Here's how different
                  tools mapped to different stages:
                </p>

                <img src={VybeImages.aiToolsOverview} alt="Overview of AI tools used at each stage of the process" />

                <div className="card-grid">
                  <Card variant="transparent" title="Research">
                    <div className="card-list">
                      <div>Perplexity — rapid desk research</div>
                      <div>Claude — summarizing & synthesizing findings</div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Ideation & Design">
                    <div className="card-list">
                      <div>Figma Make — initial mockups</div>
                      <div>Google Stitch — early interface exploration</div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Prototyping">
                    <div className="card-list">
                      <div>IKON AI — building the working prototype</div>
                      <div>Claude Code — custom interactions</div>
                      <div>Microsoft Copilot — code review</div>
                    </div>
                  </Card>
                  <Card variant="transparent" title="Presentation">
                    <div className="card-list">
                      <div>Gemini — pitch deck creation</div>
                    </div>
                  </Card>
                </div>

                <Callout type="purple" title="AI as a double-edged tool">
                  <p>
                    Using AI in design is a double-sided coin. On one hand, it compressed hours of wireframing
                    and prototyping into minutes — we could see whether something worked almost immediately. On
                    the other hand, it creates a specific kind of bias: when an interface looks beautiful, you're
                    less tempted to question it. UX problems that are covered in layers of decoration are harder
                    to notice.
                  </p>
                </Callout>

                <Callout type="lime" title="The research instinct">
                  <p>
                    The biggest risk with AI-accelerated sprints is going straight into creating. We resisted
                    that. Investing the first day in research meant that when we did hand over to AI tools, we
                    had clear criteria for what good looked like — which made iteration much faster and more
                    purposeful.
                  </p>
                </Callout>

                <p>
                  I was the only person on the team with a programming background, which meant I wore both the
                  developer and designer hats during prototyping. Working with IKON AI made this surprisingly
                  manageable: I focused on design decisions while the AI handled implementation, stepping in
                  with Claude Code when I needed precise control over specific interactions.
                </p>

                <CollapsibleBox type="purple" title="How we prompted IKON AI">
                  <p>
                    Our process with IKON was iterative rather than one-shot. We started by feeding it Yle's
                    design guidelines so the output would feel native to their brand. Then we described the
                    features we needed one at a time, reviewed what came out, and iterated. The dark theme
                    emerged during this process — [describe the decision: was it a deliberate early choice or
                    did it emerge from the AI's suggestions?].
                  </p>
                </CollapsibleBox>
              </div>

              <div id="prototype" className="subsection">
                <h2 className="subsection-title">Interactive Prototype</h2>
                <p>
                  Below is the working prototype of Yle Vybe. Unlike a Figma click-through, this is a
                  functional build — the interactions are real.
                </p>

                <div className="text-center">
                  <Button href="https://drive.google.com/file/d/1L9YaiyzitQyTvHC0qwBj-02ELijT2kp5/view">
                    View Yle Vybe Video ↗
                  </Button>
                </div>
              </div>

            </Section>

            {/* REFLECTION */}
            <Section id="reflection" title="Reflection">

              <div className="card-grid" style={{marginTop: "0"}}>
                <Card variant="beige" title="What worked">
                  <ul>
                    <li>Investing in research even under time pressure — it gave us a clear concept faster than going straight to ideas</li>
                    <li>The commute insight as a behavioral anchor — it made every subsequent design decision easier</li>
                    <li>AI tools let us present a working prototype rather than a click-through, which landed much better with Yle's team</li>
                    <li>The team's diverse perspectives surfaced the insight that eventually became the whole concept</li>
                  </ul>
                </Card>

                <Card variant="green" title="What's missing">
                  <ul>
                    <li>Real user testing — we validated the concept conceptually but not with actual young Finnish commuters</li>
                    <li>The producer side: how would Yle's editorial team select and schedule songs?</li>
                    <li>Accessibility and offline mode for commuters in low-signal areas</li>
                    <li>A deeper exploration of the personalization question — shared vs. individual songs deserves more research</li>
                  </ul>
                </Card>
              </div>

              <div id="my-learnings" className="subsection">
                <h2 className="subsection-title">My Learnings</h2>

                <Callout type="purple">
                  AI is great for presenting an MVP — especially in a 3-day sprint format where the goal is to
                  communicate a concept convincingly. When it comes to an actual product, humans are still
                  necessary to make decisions, select data, and question what the interface is hiding.
                </Callout>

                <Callout type="purple">
                  When the interface looks beautiful, you're less tempted to question it. This is the core
                  danger of AI-generated UI: decoration can mask design problems. You have to actively
                  introduce friction into your own review process.
                </Callout>

                <Callout type="purple">
                  Not using AI in Harvest taught me where I genuinely need it. Using AI throughout Vybe taught
                  me where to be suspicious of it. Both projects changed how I think about tools — as things
                  with trade-offs, not answers.
                </Callout>

                <Callout type="lime">
                  The most transferable skill from DASH wasn't any specific tool — it was knowing when to slow
                  down. In a sprint, speed is the default pressure. The moments we chose to stop and think
                  rather than immediately make were the moments that produced the best work.
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