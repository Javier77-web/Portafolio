// src/components/sections/News.jsx
import React, { useEffect, useState } from 'react';
import NewsCard from '../molecules/NewsCard';
import '../../styles/sections/News.css';
import newsData from '../../data/news.json';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <section id="news" className="news-section">
      <div className="section-container">
        <h2 className="section-title">Noticias</h2>
        <div className="news-grid">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              fecha={item.fecha}
              imagen={item.imagen}
              enlace={item.enlace}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
