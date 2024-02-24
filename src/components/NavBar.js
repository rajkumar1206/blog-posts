import { useContext, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Sun, Moon } from 'react-bootstrap-icons';
import { AppContext } from "./Wrapper";

function NavBar() {
  const navigate = useNavigate();
  const { theme, setTheme, navigateToPortfolio } = useContext(AppContext);

  const navigateHome = () => {
    navigate({
      search: createSearchParams({}).toString()
    });
  };

  const changeTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light' );
  };

  const navigateToContact = () => {
    const section = document.querySelector( '#contact' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg={theme === 'dark' ? "dark" : "light" } data-bs-theme={theme === 'dark' ? "dark" : "light" }>
        <Container>
          <Navbar.Brand className="c-p heading" onClick={navigateHome}>Rajkumar Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={navigateToPortfolio}>Portfolio</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={navigateToContact}>Contact me</Nav.Link>
              <Nav.Link eventKey={2} onClick={changeTheme}>
              {theme === 'light' ? <Sun /> : <Moon /> }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
