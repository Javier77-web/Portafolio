// src/components/sections/About.jsx
import React from 'react';
import Icon from '../../../src/components/atoms/Icons';
import '../../styles/sections/About.css'; // estilos globales de la sección

// importar íconos desde assets
import htmlIcon from '../../assets/icons/htm.webp';
import cssIcon from '../../assets/icons/css.webp';
import jsIcon from '../../assets/icons/js.webp';
import reactIcon from '../../assets/icons/react.webp';
import nodeIcon from '../../assets/icons/node.webp';
import postIcon from '../../assets/icons/postgr.webp';
import mysqlIcon from '../../assets/icons/mysql.webp';
import awsIcon from '../../assets/icons/aws.webp';
import andIcon from '../../assets/icons/andro.webp';
import apaIcon from '../../assets/icons/apa.webp';
import figIcon from '../../assets/icons/fig.webp';
import bootIcon from '../../assets/icons/boot.webp';
import gitIcon from '../../assets/icons/git.webp';
import javaIcon from '../../assets/icons/java.webp';
import pycon from '../../assets/icons/py.webp';
import spinIcon from '../../assets/icons/spring.webp';
import vscIcon from '../../assets/icons/vsc.webp';
import wpIcon from '../../assets/icons/word.webp';

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
          <Icon src={postIcon} alt="Postgret" name="Postgret" />
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
