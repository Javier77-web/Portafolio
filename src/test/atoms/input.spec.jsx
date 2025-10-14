// src/test/atoms/input.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('Input component', () => {
  it('debería renderizar con placeholder y name correctos', () => {
    render(<Input placeholder="Escribe tu nombre" name="nombre" />);
    
    const inputElement = screen.getByPlaceholderText(/escribe tu nombre/i);
    expect(inputElement).not.toBeNull();
    expect(inputElement.getAttribute('name')).toBe('nombre');
  });

  it('debería tener tipo "text" por defecto', () => {
    render(<Input placeholder="Email" />);
    
    const inputElement = screen.getByPlaceholderText(/email/i);
    expect(inputElement.getAttribute('type')).toBe('text');
  });

  it('debería llamar a onChange al escribir', () => {
    const handleChange = jasmine.createSpy('handleChange');

    render(
      <Input 
        placeholder="Correo" 
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText(/correo/i);
    fireEvent.change(input, { target: { value: 'ejemplo@email.com' } });

    expect(handleChange).toHaveBeenCalled(); // Jasmine
  });

  it('debería tener el atributo required cuando se pasa', () => {
    render(<Input placeholder="Contraseña" required={true} />);

    const inputElement = screen.getByPlaceholderText(/contraseña/i);
    expect(inputElement.hasAttribute('required')).toBeTrue(); // Jasmine
  });

  it('debería tener el atributo id cuando se pasa', () => {
    render(<Input placeholder="Usuario" id="input-usuario" />);

    const inputElement = screen.getByPlaceholderText(/usuario/i);
    expect(inputElement.getAttribute('id')).toBe('input-usuario');
  });
});
