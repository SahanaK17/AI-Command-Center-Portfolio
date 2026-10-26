import React from 'react';
import { Link } from 'react-router-dom';
import guideImg from '../assets/ai_guide_hero.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Sahana K.</h1>
        <p className="hero-tagline">AI/ML + Software Engineer</p>
        <div className="hero-actions">
          <Link to="/projects" className="hero-button primary">Explore Projects</Link>
          <Link to="/about" className="hero-button secondary">View Resume</Link>
          <Link to="/contact" className="hero-button secondary">Contact Me</Link>
        </div>
      </div>
      <div className="hero-illustration">
        <img src={guideImg} alt="AI Portfolio Guide" />
      </div>
    </section>
  );
};

export default Hero;
