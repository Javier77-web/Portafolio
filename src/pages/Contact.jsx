
import React from 'react';
import '../styles/pages/Contact.css'
function Contact() {
  return (
    <div className="contact-container">
      <h2>Contáctame</h2>

      <form className="contact-form">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input type="email" placeholder="tuemail@gmail.com" />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea rows="5" placeholder="Escribe tu mensaje..."></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;