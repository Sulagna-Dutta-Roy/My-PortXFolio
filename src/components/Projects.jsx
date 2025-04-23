import React from "react";

const projects = [
  { name: "Gallerytics", description: "Photo analytics web app", link: "#" },
  { name: "GitHub Rank Predictor", description: "AI-based contributor ranking", link: "#" },
  { name: "PracticePad", description: "LeetCode tracker & challenge manager", link: "#" },
];
const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((proj) => (
        <a key={proj.name} href={proj.link} className="project-card">
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
