'use client';

import { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" className="navbar py-3" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className="text-primary fw-bold fs-4">
          Elabzone
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="/chi-sono" onClick={() => setExpanded(false)}>
              Chi Sono
            </Nav.Link>
            <Nav.Link href="/servizi" onClick={() => setExpanded(false)}>
              Servizi
            </Nav.Link>
            <Nav.Link href="/portfolio" onClick={() => setExpanded(false)}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/testimonianze" onClick={() => setExpanded(false)}>
              Testimonianze
            </Nav.Link>
            <Nav.Link href="/contatti" onClick={() => setExpanded(false)}>
              Contatti
            </Nav.Link>
          </Nav>
          <Button 
            variant="primary" 
            href="/contatti" 
            className="ms-lg-3"
            onClick={() => setExpanded(false)}
          >
            Richiedi Preventivo
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
