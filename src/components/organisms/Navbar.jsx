// src/components/organisms/Navbar.jsx
import React from 'react';
import '../../styles/organisms/Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
function NavBar ()  {
  return (
    <Navbar bg="transparent" variant="light" expand="lg">
     <Container>
       <Navbar.Brand href="/"></Navbar.Brand> 
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="#inicio">Inicio</Nav.Link>
           <Nav.Link href="#about">Acerca de Mi</Nav.Link>
           <Nav.Link href="#projects">Proyectos</Nav.Link>
           <Nav.Link href="#news">Noticias</Nav.Link>
           <Nav.Link href="#contact">Contacto</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  );
}

export default NavBar;
