import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <ul className="skill-categories">
        <li><strong>AI & Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, Keras</li>
        <li><strong>Programming Languages:</strong> Python, JavaScript/TypeScript, C++, Java, C#</li>
        <li><strong>Data & Analytics:</strong> Pandas, NumPy, SQL, PowerBI, Tableau</li>
        <li><strong>Web & Software Development:</strong> React, Vite, Node.js, Express, .NET, Docker</li>
        <li><strong>Tools & Platforms:</strong> Git, Linux, AWS, Azure, GCP, VS Code</li>
      </ul>
    </section>
  );
};

export default Skills;
