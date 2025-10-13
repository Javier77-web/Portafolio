// src/components/sections/Contact.jsx

import React from 'react';
import '../../styles/sections/Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contáctame</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Escribe tu nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje..." required></textarea>
        </div>

        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
