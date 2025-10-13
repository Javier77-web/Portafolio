// src/components/setions/Home.jsx
import React from 'react'; // importar react para crear el componente
import '../../styles/sections/Home1.css'; // importar estilos css específicos para esta página
import miFoto from '../../assets/fore.webp'; // importar la imagen en formato webp (puede ser jpg o webp)

function Home1() {
  return (
    <>
      <section id="inicio" className="home-fondo"> {/* contenedor principal con fondo negro */}
        <div className="home-container"> {/* contenedor para limitar ancho y centrar contenido */}
          <div className="htexto-imagen"> {/* contenedor que agrupa texto e imagen */}
            <div className="htexto"> {/* contenedor para el texto */}
              <h2 className="hola">Hola, soy</h2> {/* subtítulo h2 arriba */}
              <h1 className="nombre">Javier <span className="apellido">Nilo</span></h1> {/* título h1 con span para resaltar "nilo" */}
              <p className='parrafo'>Ingeniero En Informática</p>

              <div className="contact-section-home">
              <a href="#contact" className="btn-contact-me">Contáctame</a>
                <div className="social-buttons">
                  <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn github">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-btn whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-image-container"> {/* contenedor para la imagen */}
              <img 
                src={miFoto} 
                alt="foto de javier nilo" 
                className="home-image" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home1; // exportar el componente para usarlo en otras partes