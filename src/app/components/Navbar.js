'use client';

import Link from 'next/link';
import { Navbar, Nav, Container, Offcanvas, NavDropdown  } from 'react-bootstrap'; //Just to show there are other ways to use bootstrap components

export default function HeaderNavbar() {
  return (
    <Navbar variant="dark" expand="xl" sticky='top' className="py-3 z-3 bg-blue z-5">
      <Container>
        <Navbar.Brand as={Link} href="/">Software Recruitment Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Offcanvas
              id="navbar-nav"
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end" className='navbar-offcanvas'
            >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="me-auto ms-4 align-items-start align-items-xl-center gap-xl-4 mb-3 mb-xl-0">
                        <NavDropdown title="For jobseekers" id={`offcanvasNavbarDropdown-expand-lg`} className='rounded'>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="For clients" id={`offcanvasNavbarDropdown-expand-lg`}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sectors" id={`offcanvasNavbarDropdown-expand-lg`}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id={`offcanvasNavbarDropdown-expand-lg`}>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="pt-2 pt-sm-0 d-flex flex-column flex-xl-row gap-2">
                        <Nav.Link href="#" variant="info" className='uploadButton fw-semibold text-dark'>Upload CV</Nav.Link>
                        <Nav.Link href="#" className='contactButton fw-semibold text-dark'>Contact us</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
