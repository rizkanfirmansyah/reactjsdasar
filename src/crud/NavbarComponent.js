import React from "react";
import { Navbar,  Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CRUD React JS</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
