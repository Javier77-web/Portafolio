import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../components/sections/About';

describe('About section', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('debería renderizar los títulos y párrafo principal', () => {
    expect(screen.queryByText(/acerca de mí/i)).not.toBeNull();
    expect(screen.queryByText(/ingeniero en informática/i)).not.toBeNull();
    expect(screen.queryByText(/soy un apasionado del desarrollo web/i)).not.toBeNull();
    expect(screen.queryByText(/tecnologías que utilizo/i)).not.toBeNull();
  });

  it('debería mostrar todos los nombres de tecnologías usados', () => {
    const tecnologias = [
      "HTML", "CSS", "JavaScript", "React", "Node.js", "Postgret", "MySQL", "AWS",
      "Android", "Apache", "Figma", "Bootstrap", "GitHub", "Java", "Python",
      "Spring Boot", "VS Code", "WordPress"
    ];

    tecnologias.forEach((tech) => {
      expect(screen.queryByText(tech)).not.toBeNull();
    });
  });
});
