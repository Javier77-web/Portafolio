import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../../components/sections/News';
import newsData from '../../data/news.json';

describe('Componente News', () => {
  let container;

  beforeEach(() => {
    const renderResult = render(<News />);
    container = renderResult.container;
  });

  it('debería renderizar la cantidad correcta de noticias', () => {
    const newsCards = container.querySelectorAll('.news-card');
    expect(newsCards.length).toBe(newsData.length);
  });

  it('debería mostrar títulos de las noticias del JSON', () => {
    newsData.forEach(({ titulo }) => {
      // Usa un matcher que ignore espacios adicionales o caracteres invisibles
      const tituloElemento = screen.getByText((content) =>
        content.trim().includes(titulo.trim())
      );
      expect(tituloElemento).toBeTruthy();
    });
  });
});
