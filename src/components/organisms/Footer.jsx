import React from 'react';
import '../../styles/organisms/Footer.css';

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/56961416723',
    iconClass: 'fab fa-whatsapp',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/javier-nilo-a0b140310/',
    iconClass: 'fab fa-linkedin-in',
  },
  {
    name: 'Gmail',
    url: 'mailto:tuemail@gmail.com',
    iconClass: 'fas fa-envelope',
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* contenedor flex principal */}
        <div className="footer-content">
          {/* logo izquierda */}
          <div className="footer-logo">DEVELOPER</div>

          {/* menu centrado */}
          <nav className="footer-nav">
            <ul className="footer-menu">
              <li><a href="#">Inicio</a></li>
              <li><a href="#about">Acerca de mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#news">Noticias</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>

          {/* redes sociales derecha */}
          <div className="footer-socials">
            {socialLinks.map(({ name, url, iconClass }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="footer-social-link"
              >
                <i className={iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
