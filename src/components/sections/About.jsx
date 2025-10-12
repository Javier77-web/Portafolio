import React from 'react';
import '../../styles/sections/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">Acerca de mí</h2>
        <h3 className="about-subtitle">Ingeniero en Informática | Full Stack Developer</h3>
        <p className="about-text">
          Soy un apasionado del desarrollo web con enfoque en experiencia de usuario, accesibilidad y soluciones funcionales...
        </p>
        <div className="tech-logos">
          {/* Aquí van los logos como antes */}
        </div>
      </div>
    </section>
  );
}

export default About;
