import React from "react";
import { Spinner, Container } from "react-bootstrap";
import splashlogo from "../../public/images/splashlogo.jpg";

const SplashScreen = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center splash-screen"
      style={{
        height: "100vh",
        backgroundColor: "#E2C892",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* Logo (optional) */}
      <img src={splashlogo} alt="Logo" height={100} className="mb-3" />

      <h3 className="mb-5 splash-title">TARAH INTERNATIONAL HOTEL</h3>

      <Spinner animation="border" style={{ color: "#331811" }} />

      <p className="mt-3 splash-subtext">Loading, please wait...</p>
    </Container>
  );
};

export default SplashScreen;
