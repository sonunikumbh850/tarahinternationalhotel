import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../public/images/tarahlogo.jpg'

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebookF size={18} />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram size={18} />,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/",
    icon: <FaTwitter size={18} />,
    label: "Twitter",
  },
  { href: "https://wa.me/", icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
];

const Footer = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#331811",
        marginTop: "100px",
      }}
    >
      {/* Newsletter Card */}
      {/* <div
        className="newsletter-card"
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "800px",
          zIndex: 5,
        }}
      >
        <Form
          className="p-3 shadow-sm text-center"
          style={{
            backgroundColor: "#331811",
            border: "2px solid #E2C892",
            borderRadius: "8px",
          }}
        >
          <h5 className="mb-3 fw-light" style={{ color: "#E2C892" }}>
            Subscribe to Our Newsletter
          </h5>
          <Row className="justify-content-center">
            <Col xs={12} sm={9}>
              <InputGroup>
                <Form.Control
                  placeholder="Enter your email"
                  className="px-3 py-2"
                  style={{
                    backgroundColor: "#ffeedf",
                    border: "none",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#E2C892",
                    border: "none",
                    padding: "0 20px",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    color: "#331811",
                    fontWeight: "500",
                  }}
                >
                  Subscribe
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </div> */}

      {/* Footer Section */}
      <div
        style={{
          backgroundColor: "#331811",
          color: "#E2C892",
          // paddingTop: "100px",
          paddingBottom: "20px",
        }}
      >
        <Container>
          <Row className="gy-4 text-center text-md-start">
            {/* Brand Info */}
            <Col xs={12} md={3}>
              <img
                src={logo}
                alt="Tarah International Hotel"
                style={{ height: "50px", objectFit: "contain" }}
              />
              <h5 className="fw-bold">TARAH INTERNATIONAL HOTEL</h5>
              <p className="small fw-light mb-0">© 2025 All rights reserved</p>
            </Col>

            {/* Menu */}
            <Col xs={6} md={2} style={{ textAlign: "left" }}>
              <h6 className="fw-bold">Menu</h6>
              <ul className="list-unstyled">
                {[
                  "/",
                  "/services",
                  "/rooms",
                  "/gallery",
                  "/pricing-plan",
                  "/contact",
                ].map((path, i) => (
                  <li key={i}>
                    <Link
                      to={path}
                      className="text-decoration-none nav-link-custom"
                      style={{ color: "#E2C892", fontSize: "14px" }}
                    >
                      {
                        [
                          "Home",
                          "Services",
                          "Rooms & Restaurant",
                          "Gallery",
                          "Pricing Plan",
                          "Contact",
                        ][i]
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Info */}
            {/* <Col xs={6} md={3}>
              <h6 className="fw-bold">Information</h6>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li>Destinations</li>
                <li>Supports</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </Col> */}
            <Col xs={6} md={3} style={{ textAlign: "left" }}>
              <h6 className="fw-bold">Information</h6>
              <ul className="list-unstyled">
                {["/supports", "/terms-conditions", "/privacy-policy"].map(
                  (path, i) => (
                    <li key={i}>
                      <Link
                        to={path}
                        className="text-decoration-none"
                        style={{ color: "#E2C892", fontSize: "14px" }}
                      >
                        {["Supports", "Terms & Conditions", "Privacy"][i]}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </Col>

            {/* Contact */}
            <Col xs={12} md={4} style={{ textAlign: "left" }}>
              <h6 className="fw-bold">Contact Info</h6>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li>+256 789 669125</li>
                {/* <li>info@tarahinternationalhotel.com</li> */}
                <li>Buziga, Kampala City, UGANDA</li>
              </ul>
            </Col>
          </Row>

          {/* Social Media */}
          <div
            className="mt-5 pt-4 border-top d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start"
            style={{
              color: "#E2C892",
              fontSize: "14px",
              borderTopColor: "#E2C892",
            }}
          >
            <span className="fw-light">Follow us on social media</span>

            <div className="d-flex gap-4">
              {socialLinks.map(({ href, icon, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#E2C892" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
