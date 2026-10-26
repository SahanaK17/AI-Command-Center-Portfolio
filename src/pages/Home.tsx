import React from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home: React.FC = () => (
  <div className="home-page">
    <Hero />
    <section className="overview-section">
      <h2 className="overview-heading">Dashboard Overview</h2>
      <div className="overview-panels">
        <div className="panel panel-featured">
          <h3>Featured Projects</h3>
          <p>Explore a selection of AI/ML and software engineering projects.</p>
          <a href="/projects" className="panel-link">View Projects</a>
        </div>
        <div className="panel panel-skills">
          <h3>Core Skills</h3>
          <p>Programming, Machine Learning, Data Science, Web Development, and more.</p>
          <a href="/skills" className="panel-link">See Skills</a>
        </div>
        <div className="panel panel-experience">
          <h3>Experience</h3>
          <p>Internships and professional work in AI and software engineering.</p>
          <a href="/experience" className="panel-link">Read Experience</a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
