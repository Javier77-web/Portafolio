// src/components/sections/News.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/sections/News.css'; // crea un archivo para los estilos
import noticiasData from '../../data/news.json'; // ajusta el path si lo tienes en otro lado

function News() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // cargamos las noticias desde el JSON
    setNoticias(noticiasData);
  }, []);

  return (
    <section id="news" className="news-section">
      <div className="section-container">
        <h2 className="section-title">Noticias</h2>
        <div className="news-grid">
          {noticias.map((noticia, index) => (
            <div key={index} className="news-card">
              <h3 className="news-title">{noticia.titulo}</h3>
              <p className="news-date">{noticia.fecha}</p>
              <p className="news-content">{noticia.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
