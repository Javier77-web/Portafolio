// src/components/sections/Projects.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from '../molecules/ProjectCard';
import '../../styles/sections/Projects.css';
import projectsData from '../../data/projects.json';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // en este caso, importamos directamente el JSON
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
          <ProjectCard
          key={project.id}
          titulo={project.titulo}
          descripcion={project.descripcion}
          tecnologias={project.tecnologias}
          imagen={project.imagen} 
          enlace={project.enlace}
          />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

