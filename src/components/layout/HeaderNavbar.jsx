import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "../../styles/HeaderNavbar.module.css";

const HeaderNavbar = () => {
  // Flag creada para eliminar el icono de flecha predeterminado por bootstrap que reaparece cada vez que se interactúa con el dropdown
  const [flag, setFlag] = useState(false);

  const changeFlagState = () => setFlag((prevState) => !prevState);

  useEffect(() => {
    const externalElement = document.querySelector("#basic-nav-dropdown"); // Obtengo el elemento por su id

    // Si el elemento existe remuevo la clase dropdown-toggle, la cual le agrega el icono de flecha predeterminado
    if (externalElement) {
      externalElement.classList.remove("dropdown-toggle");
    }
  }, [flag]);
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container className={styles.divContainer}>
        <Navbar.Brand href="#home">
          <img
            src="/src/assets/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <hr />
          <Nav className="me-auto">
            <div className={"vr mx-3 d-none d-lg-block " + styles.vr}></div>
            <Nav.Link href="#home" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={styles.link}>
              About
            </Nav.Link>
            <NavDropdown
              title={
                <span className={styles.link}>
                  Pages <i className="bi bi-arrow-down-short"></i>
                </span>
              }
              id="basic-nav-dropdown"
              onToggle={changeFlagState}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#packages" className={styles.link}>
              Packages
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.link}>
              Contact
            </Nav.Link>
            <Nav.Link href="#cart" className={styles.link}>
              Cart [0]
            </Nav.Link>
          </Nav>
          <hr />
          <div className={styles.buttonContainer}>
            <Button
              variant="outline-primary"
              className={"rounded-pill d-flex px-4 " + styles.customOutlineBtn}
            >
              Free Consultation{" "}
              <i className={"bi bi-arrow-right " + styles.arrowIcon}></i>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
