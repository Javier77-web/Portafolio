import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/organisms/Navbar.css';
import './styles/templates/global.css';


createRoot(document.getElementById('root')).render(
 <StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </StrictMode>,
)

/*los cambios que estamos haciendo son:
estamos llamando BrowserRouter que nos permite ir cambiando entre sitios
estamos incluyendo bootstrap en el global de nuestro proyecto
estamos llamando nuestra hoja de estilos global justamente en el archivo raiz
 */
