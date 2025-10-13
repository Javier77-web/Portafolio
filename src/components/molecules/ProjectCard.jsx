import React from 'react';
import '../atoms/Buttongit';
import '../../styles/molecules/ProjectCard.css';
import Buttongit from '../atoms/Buttongit';

function ProjectCard({ titulo, descripcion, tecnologias, imagen, enlace }) {
  return (
    <div className="project-card">
      <img
        src={`/assets/${imagen}`}
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
          <Buttongit />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;



