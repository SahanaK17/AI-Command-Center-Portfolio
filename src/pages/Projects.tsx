import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3 className="project-name">{proj.name}</h3>
            <p className="project-desc">{proj.description}</p>
            <p className="project-tech">
              <strong>Tech:</strong> {proj.tech.join(', ')}
            </p>
            <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
