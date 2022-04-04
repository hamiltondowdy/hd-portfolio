import React from "react"
import { Navbar , NavDropdown, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
return (

    <Navbar sticky="top" className="justify-content-end" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Hamilton Dowdy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
      <Navbar.Collapse id="basic-navbar-nav justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown neo-button">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
export default NavBar;
