// src/components/molecules/ProjectCard.jsx
import React from 'react';
import '../../styles/molecules/ProjectCard.css';

function ProjectCard({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <div className="project-card">
      <img 
        src={`/assets/icons/${imagen}`} 
        alt={`Imagen del proyecto ${titulo}`} 
        className="project-card-image"
      />
      <div className="project-card-body">
        <h3 className="project-card-title">{titulo}</h3>
        <p className="project-card-description">{descripcion}</p>

        <div className="project-card-tech">
          {tecnologias.map((tech, idx) => (
            <span key={idx} className="project-card-tech-item">
              {tech}
            </span>
          ))}
        </div>

        <a 
          href={enlace} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card-link"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;


