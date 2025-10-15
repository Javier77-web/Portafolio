// src/components/atoms/Icons.jsx
import React from 'react';
import '../../styles/atoms/icons.css';

function Icon({ src, alt, name }) {
  return (
    <div className="tech-logo" data-name={name}>
      <img src={src} alt={alt} className="icon-image" />
      <span className="icon-label">{name}</span>
    </div>
  );
}

export default Icon;

