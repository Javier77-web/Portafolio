import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../../components/atoms/Icons';

describe('Icon component', () => {
  it('debería mostrar el nombre enviado por props', () => {
    render(<Icon src="/fake.png" alt="React Logo" name="React" />);
    const label = screen.queryByText(/React/i);
    expect(label).not.toBeNull();
  });

  it('debería renderizar una imagen con el alt correcto', () => {
    render(<Icon src="/fake.png" alt="React Logo" name="React" />);
    const img = screen.getByAltText(/React Logo/i);
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
  });

  it('debería tener el atributo data-name igual al nombre', () => {
    render(<Icon src="/fake.png" alt="React Logo" name="React" />);
    const div = document.querySelector('.tech-logo');
    expect(div).not.toBeNull();
    expect(div.getAttribute('data-name')).toBe('React');
  });
});
