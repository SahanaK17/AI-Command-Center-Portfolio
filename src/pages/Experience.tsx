import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2>Experience & Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2023 – Present</div>
          <div className="timeline-content">
            <h3>AI Engineer – TechCorp</h3>
            <p>Developed real‑time AI models for predictive maintenance, integrated TensorFlow.js pipelines into web dashboards.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2021 – 2023</div>
          <div className="timeline-content">
            <h3>Software Engineer – Innovate Labs</h3>
            <p>Built full‑stack applications with React, Node.js, and Docker; led CI/CD automation and cloud deployments on AWS.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2020 – 2021</div>
          <div className="timeline-content">
            <h3>M.Tech in AI & Data Science – University XYZ</h3>
            <p>Thesis on multimodal deep learning for mental‑fatigue detection; published 2 papers in IEEE conferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
