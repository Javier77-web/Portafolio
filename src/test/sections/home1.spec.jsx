import React from 'react';
import { render, screen } from '@testing-library/react';
import Home1 from '../../components/sections/Home1';

describe('Home1 section', () => {
  it('debería renderizar los textos principales', () => {
    render(<Home1 />);
    
    const holaText = screen.getByText(/hola, soy/i);
    const nombreText = screen.getByText(/javier/i);
    const apellidoText = screen.getByText(/nilo/i);
    const profesionText = screen.getByText(/ingeniero en informática/i);

    expect(holaText).not.toBeNull();
    expect(nombreText).not.toBeNull();
    expect(apellidoText).not.toBeNull();
    expect(profesionText).not.toBeNull();
  });

  it('debería tener el botón de contáctame con enlace a #contact', () => {
    render(<Home1 />);
    
    const contactBtn = screen.getByRole('link', { name: /contáctame/i });
    expect(contactBtn).not.toBeNull();
    expect(contactBtn.getAttribute('href')).toBe('#contact');
  });

  it('debería tener enlaces a redes sociales (GitHub, LinkedIn, WhatsApp)', () => {
    render(<Home1 />);

    const githubLink = screen.getByLabelText(/github/i);
    const linkedinLink = screen.getByLabelText(/linkedin/i);
    const whatsappLink = screen.getByLabelText(/whatsapp/i);

    expect(githubLink).not.toBeNull();
    expect(linkedinLink).not.toBeNull();
    expect(whatsappLink).not.toBeNull();

    expect(githubLink.getAttribute('href')).toContain('github.com');
    expect(linkedinLink.getAttribute('href')).toContain('linkedin.com');
    expect(whatsappLink.getAttribute('href')).toContain('wa.me');
  });

  it('debería renderizar la imagen con alt correcto', () => {
    render(<Home1 />);

    const image = screen.getByAltText(/foto de javier nilo/i);
    expect(image).not.toBeNull();
    expect(image.tagName.toLowerCase()).toBe('img');
  });
});
