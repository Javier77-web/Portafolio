import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../../components/sections/Contact';

describe('Contact section', () => {
  it('debería renderizar el título principal', () => {
    render(<Contact />);
    const title = screen.getByText(/contáctame/i);
    expect(title).not.toBeNull(); // ✔ Reemplazo
  });

  it('debería contener los campos de entrada requeridos', () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText(/escribe tu nombre/i);
    expect(nameInput).not.toBeNull();
    expect(nameInput.getAttribute('name')).toBe('name');
    expect(nameInput.hasAttribute('required')).toBeTrue();

    const emailInput = screen.getByPlaceholderText(/correo@ejemplo.com/i);
    expect(emailInput).not.toBeNull();
    expect(emailInput.getAttribute('name')).toBe('email');
    expect(emailInput.hasAttribute('required')).toBeTrue();

    const messageTextarea = screen.getByPlaceholderText(/escribe tu mensaje/i);
    expect(messageTextarea).not.toBeNull();
    expect(messageTextarea.getAttribute('name')).toBe('message');
    expect(messageTextarea.hasAttribute('required')).toBeTrue();
  });

  it('debería tener un botón de envío', () => {
    render(<Contact />);
    const button = screen.getByRole('button', { name: /enviar/i });
    expect(button).not.toBeNull();
    expect(button.getAttribute('type')).toBe('submit');
  });
});

