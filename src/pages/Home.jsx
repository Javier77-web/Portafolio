// src/pages/Home.jsx
// src/pages/Home.jsx
import React from 'react'; // importar react
import Home1 from '../components/sections/Home1'; // importar sección hero (presentación)
import About from '../components/sections/About'; // importar sección acerca de mí
import Projects from '../components/sections/Projects'; // importar sección de proyectos
import Contact from '../components/sections/Contact'; // importar sección de contacto

function Home() {
  return (
    <>
      <Home1 />       {/* sección de bienvenida con tu foto */}
      <About />      {/* sección acerca de ti */}
      <Projects />   {/* sección de proyectos */}
      <Contact />    {/* sección de contacto */}
    </>
  );
}

export default Home; // exportar el componente para usarlo en otras partes

