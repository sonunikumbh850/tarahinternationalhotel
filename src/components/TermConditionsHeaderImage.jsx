import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermConditionsHeaderImage = () => {
  return (
    <div className="pricing-header d-flex align-items-center mb-5">
      <Container className="text-center text-white">
        <h1 className="display-4 fw-light" style={{ letterSpacing: "2px" }}>
          Terms & Conditions
        </h1>

        {/* Center wrapper for breadcrumb */}
        <div className="d-flex justify-content-center mt-3">
          <Breadcrumb>
            <Breadcrumb.Item active className="text-white">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Terms & Conditions
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  );
};

export default TermConditionsHeaderImage;
