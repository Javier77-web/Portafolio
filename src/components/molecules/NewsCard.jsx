// src/components/molecules/NewsCard.jsx
import React from 'react';
import '../../styles/molecules/NewsCard.css';

function NewsCard({ titulo, descripcion, fecha, imagen, enlace }) {
  return (
    <div className="news-card">
      <img
        src={`/assets/${imagen}`}
        alt={`Imagen de la noticia ${titulo}`}
        className="news-card-image"
      />
      <div className="news-card-body">
        <h3 className="news-card-title">{titulo}</h3>
        <p className="news-card-date">{fecha}</p>
        <p className="news-card-description">{descripcion}</p>
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card-link"
        >
          Leer más
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
