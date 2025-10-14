import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/organisms/Footer';

describe('Footer component', () => {
  it('debería renderizar el logo correctamente', () => {
    render(<Footer />);
    const logo = screen.queryByText(/developer/i);
    expect(logo).not.toBeNull();
  });

  it('debería contener los enlaces del menú', () => {
    render(<Footer />);
    const menuItems = ['Inicio', 'Acerca de mí', 'Proyectos', 'Noticias', 'Contacto'];

    menuItems.forEach(text => {
      const link = screen.queryByText(new RegExp(text, 'i'));
      expect(link).not.toBeNull();
      expect(link.tagName).toBe('A');
    });
  });

  it('debería renderizar los enlaces sociales con sus atributos', () => {
    render(<Footer />);
    const socialLinks = [
      { name: 'WhatsApp', url: 'https://wa.me/56961416723' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/javier-nilo-a0b140310/' },
      { name: 'Gmail', url: 'mailto:tuemail@gmail.com' },
    ];

    socialLinks.forEach(({ name, url }) => {
      const link = screen.queryByLabelText(name);
      expect(link).not.toBeNull();
      expect(link.getAttribute('href')).toBe(url);
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    });
  });
});
