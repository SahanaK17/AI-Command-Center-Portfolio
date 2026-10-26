import React from 'react';
import { Link } from 'react-router-dom';
import guideImg from '../assets/ai_guide_hero.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Sahana K.</h1>
        <p className="hero-tagline">AI/ML Engineer | Software Engineer</p>
        <p className="hero-status">Exploring • Building • Learning</p>
        <div className="hero-actions">
          <Link to="/projects" className="hero-button primary">Explore My Projects</Link>
          <Link to="/about" className="hero-button secondary">Meet Your Guide</Link>
        </div>
      </div>
      <div className="hero-illustration">
        <img src={guideImg} alt="AI Portfolio Guide" />
        <div className="guide-bubble">
          <p>Hi, I’m your guide to Sahana’s world. Let’s explore her AI projects, skills, and journey.</p>
          <Link to="/about" className="hero-button secondary bubble-button">Start Tour</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
