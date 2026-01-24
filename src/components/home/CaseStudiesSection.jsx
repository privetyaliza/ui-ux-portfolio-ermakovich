import React from 'react';
import ProjectCard from './ProjectCard';

// --- TEMPORARY IMAGE IMPORTS (Replace with your real images) ---
// If you don't have images yet, comment these out and the 'image' property below.
import { HomeImages } from "../../img/loaders/homeimages";


// --- DATA: CASE STUDIES ---
const projectsData = [
  {
    id: 1,
    title: "Harvest Mobile App",
    description: "A delivery app that makes seasonal & local eating effortless",
    image: HomeImages.harvest_snippet1,
    status: "ready",
    bgColor: "#FFF7E4",
    path: "/harvest"
  },
  {
    id: 2,
    title: "UniWaste Service",
    description: "A project focused on reducing food waste through a campus-sharing platform",
    image: HomeImages.uniwaste_snippet,
    status: "ready",
    bgColor: "#C4E3FF"
  },
  {
    id: 3,
    title: "Coming soon",
    description: "The design is loading...",
    image: null,
    status: "coming-soon",
    // bgColor: "#F0E8F8"
  },
  {
    id: 4,
    title: "Coming soon",
    description: "The design is loading...",
    image: null,
    status: "coming-soon",
    // bgColor: "#F0E8F8"
  }
];


export default function CaseStudiesSection() {
  return (
    <section className="case-studies-section" id="case-studies">
      <h2 className="section-title">Case studies</h2>
      
      <div className="case-studies-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}