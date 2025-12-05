import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ContactHeaderImage from "../components/ContactHeaderImage";

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, phone, inquiryType, message } = formData;
    if (!name || !email || !phone || !inquiryType || !message) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!emailRegex.test(email)) return "Invalid email address.";
    if (!phoneRegex.test(phone)) return "Invalid phone number.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("https://yourdomain.com/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ContactHeaderImage />
      <Container fluid className="py-1" style={{ backgroundColor: "" }}>
        <Container>
          <div className="text-center mb-5">
            <p className="fs-5 room-subtitle mb-0">Find Us Here</p>
            <p className="text-muted fw-light display-6 room-heading">
              Our Locations
            </p>
          </div>
          <Row className="gy-4">
            {/* Left Side - Contact Info */}
            <Col md={6}>
              <div className="mb-4 d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1" size={20} />
                <div>
                  <h6 className="fw-bold mb-1">TARAH INTERNATIONAL HOTEL</h6>
                  <p className="mb-0">Buziga, Kampala City, UGANDA</p>
                </div>
              </div>

              {/* <div className="mb-4 d-flex align-items-start">
                <FaEnvelope className="me-3 mt-1" size={20} />
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="mb-0">contact@tarahinternationalhotel.com</p>
                </div>
              </div> */}

              <div className="mb-4 d-flex align-items-start">
                <FaPhoneAlt className="me-3 mt-1" size={20} />
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="mb-0" style={{ letterSpacing: "1px" }}>
                    +256 789 669125
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h6 className="fw-semiBold mb-3">Our Location here</h6>
                <img
                  src="/images/locationmap.png"
                  alt="Contact"
                  className=" rounded-4 shadow-sm"
                  style={{ maxHeight: "500px", objectFit: "cover", width: '100%' }}
                />
              </div>
            </Col>

            {/* Right Side - Contact Form */}
            <Col md={6}>
              <div
                className="h-100 p-4 p-md-5 rounded-4 border-none"
                style={{
                  backgroundColor: "#331811",
                  boxShadow: "0 8px 16px rgba(15, 24, 17, 0.2)",
                }}
              >
                <h2 className="fw-light mb-3" style={{ color: "#E2C892" }}>
                  Ask Us Anything!
                </h2>
                <p className="fw-light mb-4" style={{ color: "#E2C892" }}>
                  Got a question or need support? Fill out the form below and
                  our team will reach out shortly.
                </p>

  {error && <Alert variant="danger">{error}</Alert>}
      {submitted && (
        <Alert variant="success">Your message has been sent successfully!</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            style={{ borderColor: "#331811", color: "#331811" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: "#331811", color: "#331811" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{ borderColor: "#331811", color: "#331811" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSelect">
          <Form.Select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            style={{ borderColor: "#331811", color: "#331811" }}
          >
            <option value="">How Can I Help You?</option>
            <option>For Booking</option>
            <option>For Enquiry</option>
            <option>Service Details</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Your Messages"
            value={formData.message}
            onChange={handleChange}
            style={{ borderColor: "#331811", color: "#331811" }}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#e2c892",
            borderRadius: 10,
            color: "#331811",
          }}
        >
          Submit Now
        </Button>
      </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
};

export default Contact;
