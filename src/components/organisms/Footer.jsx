import React from 'react';
import '../../styles/organisms/Footer.css';

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/tuNumero',
    iconClass: 'fab fa-whatsapp',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuPerfil',
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
          <div className="footer-logo">DEVELOPPER</div>

          {/* menu centrado */}
          <nav className="footer-nav">
            <ul className="footer-menu">
              <li><a href="#home">Inicio</a></li>
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
