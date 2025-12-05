import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../public/images/tarahlogo.jpg";

const NavbarComponents = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(value) => setExpanded(value)}
      fixed="top"
      className="py-3 shadow-sm font"
      style={{ backgroundColor: "#331811" }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="me-2 d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Tarah International Hotel"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <span className="logo-text fw-bold">TARAH INTERNATIONAL HOTEL</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0 toggle-white"
        />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto text-center d-flex gap-3">
            {["/", "/services", "/rooms", "/gallery", "/pricing-plan", "/contact"].map(
              (path, idx) => (
                <Nav.Link
                  key={idx}
                  as={Link}
                  to={path}
                  onClick={() => setExpanded(false)}
                  className="nav-link-custom"
                >
                  {["Home", "Services", "Rooms & Restaurant", "Gallery", "Pricing", "Contact"][idx]}
                </Nav.Link>
              )
            )}
          </Nav>

          <div className="d-none d-lg-block">
            <p className="mb-0 small" style={{ color: "#E2C892" }}>
              For Booking Call: <strong>+256 789 669125</strong>
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
