// src/components/sections/About.jsx
import React from 'react';
import '../../styles/sections/About.css'; // importar los estilos

// si tienes imágenes de logos, las puedes importar aquí
import htmlIcon from '../../assets/icons/htm.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.png';
import mongoIcon from '../../assets/icons/mongodb.png';
import mysqlIcon from '../../assets/icons/mysql.png';
import awsIcon from '../../assets/icons/aws.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">Acerca de mí</h2>
        <h3 className="about-subtitle">Ingeniero en Informática | Full Stack Developer</h3>
        <p className="about-text">
          Soy un apasionado del desarrollo web con enfoque en la experiencia de usuario, accesibilidad y soluciones funcionales.
          Me especializo tanto en el frontend como en el backend, trabajando con tecnologías modernas para construir aplicaciones eficientes y atractivas.
        </p>

        <h4 className="tech-title">Tecnologías que utilizo:</h4>
        <div className="tech-logos">
          <img src={htmlIcon} alt="HTML" />
          <img src={cssIcon} alt="CSS" />
          <img src={jsIcon} alt="JavaScript" />
          <img src={reactIcon} alt="React" />
          <img src={nodeIcon} alt="Node.js" />
          <img src={mongoIcon} alt="MongoDB" />
          <img src={mysqlIcon} alt="MySQL" />
          <img src={awsIcon} alt="AWS" />
        </div>
      </div>
    </section>
  );
}

export default About;

