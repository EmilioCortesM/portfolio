import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { animate } from "motion";

setTimeout(() => {
  animate(".navlink", { transform: "rotate(360deg)" }, { duration: 1.5 });
}, 500);

function Navigation() {
  return (
    <Navbar className="main_navbar" variant="light">
      <Container>
        <Navbar.Brand className="_name" href="#home">
          <img className="img_logo" src="Emilio_Logo.png" alt="Not found" />
        </Navbar.Brand>
        <Nav className="m-auto">
          <Nav.Link
            id="github"
            onMouseLeave={() => animate("#github", { scale: 1 })}
            onMouseEnter={() => animate("#github", { scale: 1.3 })}
            href="https://github.com/EmilioCortesM"
            target="_blank"
          >
            {" "}
            <FaGithub />
          </Nav.Link>
          <Nav.Link
            id="linkedin"
            onMouseLeave={() => animate("#linkedin", { scale: 1 })}
            onMouseEnter={() => animate("#linkedin", { scale: 1.3 })}
            href="https://www.linkedin.com/in/emilio-cortes-610096148/ "
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link
            id="kaggle"
            onMouseLeave={() => animate("#kaggle", { scale: 1 })}
            onMouseEnter={() => animate("#kaggle", { scale: 1.3 })}
            href="https://www.kaggle.com/emiliocorts"
            target="_blank"
          >
            {" "}
            <FaKaggle />
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link
            id="about"
            onMouseLeave={() => animate("#about", { scale: 1 })}
            onMouseEnter={() => animate("#about", { scale: 1.1 })}
            href="#about"
          >
            About me
          </Nav.Link>
          <Nav.Link
            className="navlink"
            id="portfolio"
            onMouseLeave={() => animate("#portfolio", { scale: 1 })}
            onMouseEnter={() => animate("#portfolio", { scale: 1.1 })}
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            id="contact"
            onMouseLeave={() => animate("#contact", { scale: 1 })}
            onMouseEnter={() => animate("#contact", { scale: 1.1 })}
            href="#contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
