// src/components/organisms/Navbar.jsx
import React from 'react';
import '../../styles/components/organisms/Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavBar ()  {
  return (
    <Navbar bg="transparent" variant="light" expand="lg">
     <Container>
       <Navbar.Brand href="/"></Navbar.Brand> 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/">Inicio</Nav.Link>
           <Nav.Link href="/About">Acerca de Mi</Nav.Link>
           <Nav.Link href="/Projects">Proyectos</Nav.Link>
           <Nav.Link href="/News">Noticias</Nav.Link>
           <Nav.Link href="/Contact">Contacto</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  );
}

export default NavBar;
