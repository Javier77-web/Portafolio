import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from '../../components/molecules/NewsCard';

describe('NewsCard component', () => {
  const props = {
    titulo: 'Título de prueba',
    descripcion: 'Descripción de prueba',
    fecha: '2025-10-14',
    imagen: 'imagen.jpg',
    enlace: 'https://example.com',
  };

  it('debería mostrar el título, descripción, fecha y enlace correctamente', () => {
    render(<NewsCard {...props} />);

    // Verificar título
    expect(screen.getByText(props.titulo)).not.toBeNull();

    // Verificar descripción
    expect(screen.getByText(props.descripcion)).not.toBeNull();

    // Verificar fecha
    expect(screen.getByText(props.fecha)).not.toBeNull();

    // Verificar el enlace con texto "Leer más" y href correcto
    const enlace = screen.getByText(/leer más/i);
    expect(enlace).not.toBeNull();
    expect(enlace.getAttribute('href')).toBe(props.enlace);

    // Verificar imagen con alt correcto y src correcto
    const imagen = screen.getByAltText(`Imagen de la noticia ${props.titulo}`);
    expect(imagen).not.toBeNull();
    expect(imagen.getAttribute('src')).toContain(props.imagen);
  });
});
