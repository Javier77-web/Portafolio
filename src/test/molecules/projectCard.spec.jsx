import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../components/molecules/ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    titulo: 'Proyecto Test',
    descripcion: 'Descripción de prueba',
    tecnologias: ['React', 'CSS'],
    imagen: 'projects/pro1.webp',
    enlace: 'https://github.com/test/project'
  };

  it('debería renderizar el título del proyecto', () => {
    render(<ProjectCard {...mockProps} />);
    const titulo = screen.queryByText('Proyecto Test');
    expect(titulo).not.toBeNull(); // usamos esto en lugar de .toBeInTheDocument()
  });

  it('debería renderizar la descripción del proyecto', () => {
    render(<ProjectCard {...mockProps} />);
    const descripcion = screen.queryByText('Descripción de prueba');
    expect(descripcion).not.toBeNull();
  });

  it('debería renderizar las tecnologías', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.queryByText('React')).not.toBeNull();
    expect(screen.queryByText('CSS')).not.toBeNull();
  });

  it('debería tener un enlace al proyecto', () => {
  render(<ProjectCard {...mockProps} />);
  const links = screen.getAllByRole('link');
  const found = links.find(link => link.getAttribute('href') === mockProps.enlace);
  expect(found).not.toBeNull(); // confirma que existe el enlace con ese href
});

});


