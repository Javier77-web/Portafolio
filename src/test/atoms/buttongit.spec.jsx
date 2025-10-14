// example.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Buttongit from '../../components/atoms/Buttongit';

describe('Buttongit component', () => {
  it('debería mostrar los textos "ver" y "click aqui"', () => {
    render(<Buttongit />);
    const textoVer = screen.queryByText(/ver/i);
    const textoClick = screen.queryByText(/click aqui/i);

    expect(textoVer).not.toBeNull();
    expect(textoClick).not.toBeNull();
  });

  it('debería contener un ícono SVG', () => {
    render(<Buttongit />);
    const svgIcon = document.querySelector('svg');
    expect(svgIcon).not.toBeNull();
  });

  it('debería tener las clases principales asignadas', () => {
    render(<Buttongit />);
    const wrapper = document.querySelector('.button-icon');
    const icon = document.querySelector('.icon');
    const cube = document.querySelector('.cube');

    expect(wrapper).not.toBeNull();
    expect(icon).not.toBeNull();
    expect(cube).not.toBeNull();
  });
});
