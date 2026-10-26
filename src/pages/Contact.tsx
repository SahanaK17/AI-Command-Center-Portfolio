import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p>Feel free to reach out via the following links:</p>
      <ul className="contact-links">
        <li><a href="https://www.linkedin.com/in/sahana-k-709b59253/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/SahanaK17" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </section>
  );
};

export default Contact;
