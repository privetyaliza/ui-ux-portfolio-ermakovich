import React, { useState } from 'react';
import { HomeImages } from "../../img/loaders/homeimages";

// --- DATA: SKILLS ---
const skillsData = [
  {
    category: "Research",
    items: ["Interviewing", "Workshops", "Quantitative Data Analysis", "Survey Design", "Desk Research", "Competitor Analysis"]
  },
  {
    category: "Design",
    items: ["Wireframing", "Prototyping", "Design Systems", "User Flows", "Interaction Design", "Gamification", "Information Architecture"]
  },
  {
    category: "Evaluation",
    items: ["Usability Testing", "Wizard of Oz", "A/B Testing", "Heuristic Evaluation", "Cognitive Walkthrough", "KPIs", "Accessibility Audit", "SUS"]
  },
  {
    category: "Project Planning",
    items: ["Lean UX", "Human-Centered Design", "Design Thinking", "Double Diamond", "Agile", "Documentation", "MVP"]
  }
];

// --- DATA: TOOLS ---
const toolsData = [
  { 
    category: "Design & Prototyping", 
    items: [
      { name: "Figma", icon: HomeImages.figma },
      { name: "Adobe Illustrator", icon: HomeImages.ai },
      { name: "Adobe Photoshop", icon: HomeImages.ps },
      { name: "Blender", icon: HomeImages.blender },
      { name: "Loveable", icon: HomeImages.loveable }
    ] 
  },
  { 
    category: "Collaboration", 
    items: [
      { name: "Miro", icon: HomeImages.miro },
      { name: "Notion", icon: HomeImages.notion },
      { name: "Teams", icon: HomeImages.teams },
      { name: "Mural", icon: HomeImages.mural },
      { name: "Trello", icon: HomeImages.trello },
      { name: "FigJam", icon: HomeImages.figjam }
    ] 
  },
  { 
    category: "Coding", 
    items: [
      { name: "Python", icon: HomeImages.python },
      { name: "React", icon: HomeImages.react },
      { name: "VS Code", icon: HomeImages.vscode },
      { name: "Git", icon: HomeImages.git },
      { name: "JavaScript", icon: HomeImages.js },
      { name: "SQLite", icon: HomeImages.sqlite }
    ] 
  }
];

/* ... inside your component return ... */

{/* 2. TOOLS LAYOUT */}
<div className="tools-grid">
  {toolsData.map((group, index) => (
    <div key={index} className="tool-column">
      <h3 className="skill-category-title">{group.category}</h3>
      <div className="tool-icons-wrapper">
        {group.items.map((tool, idx) => (
          
          <div key={idx} className="tool-icon-placeholder">
             {/* The Image */}
             <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
             
             {/* The Tooltip (Hidden by default) */}
             <span className="tool-tooltip">{tool.name}</span>
          </div>

        ))}
      </div>
    </div>
  ))}
</div>

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('skills'); 

  return (
    <section className="skills-section">
      <h2 className="section-title">What I Can Do</h2>
      
      {/* Toggle Switch */}
      <div className="skills-toggle">
        <button 
          className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button 
          className={`toggle-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
      </div>

      {/* CONDITIONAL RENDERING */}
      {activeTab === 'skills' ? (
        
        /* 1. SKILLS LAYOUT (2x2 Grid) */
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-column">
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-chips-wrapper">
                {group.items.map((item, idx) => (
                  <span key={idx} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      ) : (
        <div className="tools-grid">
        {toolsData.map((group, index) => (
            <div key={index} className="tool-column">
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="tool-icons-wrapper">
                {group.items.map((tool, idx) => (
                
                <div key={idx} className="tool-icon-placeholder">
                    {/* The Image */}
                    <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                    
                    {/* The Tooltip (Hidden by default) */}
                    <span className="tool-tooltip">{tool.name}</span>
                </div>

                ))}
            </div>
            </div>
        ))}
        </div>

      )}
    </section>
  );
}