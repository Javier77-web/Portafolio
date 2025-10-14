import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../components/organisms/Navbar';

describe('NavBar component', () => {
  it('debería renderizar los enlaces del navbar correctamente', () => {
    render(<NavBar />);
    const links = [
      { text: 'Inicio', href: '#inicio' },
      { text: 'Acerca de Mi', href: '#about' },
      { text: 'Proyectos', href: '#projects' },
      { text: 'Noticias', href: '#news' },
      { text: 'Contacto', href: '#contact' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.queryByText(new RegExp(text, 'i'));
      expect(link).not.toBeNull();
      expect(link.tagName).toBe('A');
      expect(link.getAttribute('href')).toBe(href);
    });
  });

  it('debería renderizar el botón toggle para dispositivos móviles', () => {
    render(<NavBar />);
    const toggleButton = screen.queryByLabelText(/toggle navigation/i);
    expect(toggleButton).not.toBeNull();
  });
});
