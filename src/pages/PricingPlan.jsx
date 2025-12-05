import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PricingHeaderImage from "../components/PricingHeaderImage";

// Currency formatter for UGX
const formatUGX = (value) =>
  value.toLocaleString("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
  });

const packages = [
  {
    title: "Budget Escape",
    price: 150,
    unit: "1 Adult",
    features: [
      "Standard Room",
      "800 sqf",
      "Ceiling Fan",
      "Free Breakfast",
      "Shared Lounge Access",
      "Basic Support",
    ],
    highlighted: false,
  },
  {
    title: "Romantic Getaway",
    price: 270,
    unit: "2 Adults",
    features: [
      "Deluxe Room",
      "1200 sqf",
      "Private Balcony",
      "Candlelight Dinner",
      "Mini Bar",
      "24/7 Room Service",
      "Concierge Support",
    ],
    highlighted: false,
  },
  {
    title: "Family Retreat",
    price: 550,
    unit: "Up to 4 Guests",
    features: [
      "Suite Room",
      "1800 sqf",
      "Central Air Conditioning",
      "Private Dining Area",
      "Kids Play Zone Access",
      "Daily Housekeeping",
      "Priority Support",
    ],
    highlighted: false,
  },
];

const PricingPlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    appointment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.appointment.trim()) newErrors.appointment = "Appointment time is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", {
        ...formData,
        plan: selectedPlan,
      });

      // Reset
      setShowModal(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        appointment: "",
      });
      setErrors({});
      alert("Your request has been submitted!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <PricingHeaderImage />

      <Container className="my-5 text-center">
        <div className="text-center mb-5">
          <p className="fs-5 room-subtitle mb-0">Perfect Plans</p>
          <p className="text-muted fw-light display-6 room-heading">
            Choose Your Package
          </p>
        </div>

        <Row className="justify-content-center">
          {packages.map((pkg, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
              <Card
                className="h-100 p-4 border-0 rounded-4 shadow-sm"
                style={{backgroundColor:'#FFD2C7'}}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fs-4 mb-3 package-title">
                      {pkg.title}
                    </Card.Title>
                    <h3 className="mb-1 package-price">
                      ${pkg.price}{" "}
                      <small
                        className={
                          pkg.highlighted ? "text-light" : "text-muted"
                        }
                      >
                        / {pkg.unit}
                      </small>
                    </h3>
                    <p
                      className={`mb-3 ${
                        pkg.highlighted ? "text-light" : "text-muted"
                      } fs-6`}
                    >
                      {formatUGX(pkg.price * 3800)}
                    </p>
                    <hr
                      className={`${
                        pkg.highlighted ? "border-light" : "border-dark"
                      }`}
                    />
                    <ul className="list-unstyled text-start small feature-list">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          ✅ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="mt-3"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: pkg.highlighted ? "#e2c892" : "#331811",
                      color: pkg.highlighted ? "#331811" : "#e2c892",
                      border: "none",
                    }}
                    onClick={() => {
                      setSelectedPlan(pkg.title);
                      setShowModal(true);
                    }}
                  >
                    Choose Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="w-75 mx-auto text-center mt-5">
          <p className="text-muted fs-6 plan-desc">
            Experience Greater Flexibility and Security. Upgrade to a system
            with enhanced scalability, advanced features, and stronger
            protection.
          </p>
          <Button
            as={Link}
            to="/contact"
            className="mt-3 px-4 py-2"
            style={{
              backgroundColor: "#331811",
              border: "none",
              color: "#FFD2C7",
              borderRadius: "8px",
            }}
          >
            Contact Us Now
          </Button>
        </div>
      </Container>

      {/* Modal Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book: {selectedPlan}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control
                name="appointment"
                type="datetime-local"
                value={formData.appointment}
                onChange={handleChange}
                isInvalid={!!errors.appointment}
              />
              <Form.Control.Feedback type="invalid">
                {errors.appointment}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100 rounded-3">
              Submit Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default PricingPlan;
