// src/test/sections/projects.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../../components/sections/Projects';
import projectsData from '../../data/projects.json';

describe('Componente Projects', () => {
  let container;

  beforeEach(() => {
    const renderResult = render(<Projects />);
    container = renderResult.container;
  });

  it('debería renderizar el título principal', () => {
    const titulo = screen.getByText(/proyectos/i);
    expect(titulo).toBeTruthy();
  });

  it('debería renderizar la cantidad correcta de proyectos', () => {
    const tarjetas = container.querySelectorAll('.project-card');
    expect(tarjetas.length).toBe(projectsData.length);
  });

  it('debería mostrar los títulos de los proyectos del JSON', () => {
    projectsData.forEach(({ titulo }) => {
      const tituloElemento = screen.getByText((text) =>
        text.trim().includes(titulo.trim())
      );
      expect(tituloElemento).toBeTruthy();
    });
  });
});

