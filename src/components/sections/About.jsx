// src/components/sections/About.jsx

import React from 'react';
import '../../styles/sections/About.css'; // estilos globales de la sección
import Icon from '../atoms/icons';

// importar íconos desde assets
import htmlIcon from '../../assets/icons/htm.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/node.png';
import mongoIcon from '../../assets/icons/postgr.png';
import mysqlIcon from '../../assets/icons/mysql.png';
import awsIcon from '../../assets/icons/aws.png';
import andIcon from '../../assets/icons/andro.png';
import apaIcon from '../../assets/icons/apa.png';
import figIcon from '../../assets/icons/fig.png';
import bootIcon from '../../assets/icons/boot.png';
import gitIcon from '../../assets/icons/git.png';
import javaIcon from '../../assets/icons/java.png';
import pycon from '../../assets/icons/py.png';
import spinIcon from '../../assets/icons/spring.png';
import vscIcon from '../../assets/icons/vsc.png';
import wpIcon from '../../assets/icons/word.png';

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
          <Icon src={htmlIcon} alt="HTML" name="HTML" />
          <Icon src={cssIcon} alt="CSS" name="CSS" />
          <Icon src={jsIcon} alt="JavaScript" name="JavaScript" />
          <Icon src={reactIcon} alt="React" name="React" />
          <Icon src={nodeIcon} alt="Node.js" name="Node.js" />
          <Icon src={mongoIcon} alt="MongoDB" name="MongoDB" />
          <Icon src={mysqlIcon} alt="MySQL" name="MySQL" />
          <Icon src={awsIcon} alt="AWS" name="AWS" />
          <Icon src={andIcon} alt="Android" name="Android" />
          <Icon src={apaIcon} alt="Apache" name="Apache" />
          <Icon src={figIcon} alt="Figma" name="Figma" />
          <Icon src={bootIcon} alt="Bootstrap" name="Bootstrap" />
          <Icon src={gitIcon} alt="GitHub" name="GitHub" />
          <Icon src={javaIcon} alt="Java" name="Java" />
          <Icon src={pycon} alt="Python" name="Python" />
          <Icon src={spinIcon} alt="Spring Boot" name="Spring Boot" />
          <Icon src={vscIcon} alt="VS Code" name="VS Code" />
          <Icon src={wpIcon} alt="WordPress" name="WordPress" />
        </div>
      </div>
    </section>
  );
}

export default About;
