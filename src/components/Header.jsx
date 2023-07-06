import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <NavLink style={{ textDecoration: 'none ' }} to="/logs">
            <Navbar.Brand>Captain's Log</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/"
              >
                Home
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  border: '1px solid white',
                }}
                className="btn"
                to="/logs/new"
              >
                New Log
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
