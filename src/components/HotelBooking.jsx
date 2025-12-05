import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDateInput from "./CustomDateInput";

const HotelBooking = () => {
  const [rooms, setRooms] = useState("1 Room");
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const guestSummary = `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children !== 1 ? "ren" : ""}, ${infants} Infant${infants !== 1 ? "s" : ""}`;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const bookingSummary = `
Booking Details:
------------------
Rooms: ${rooms}
Guests: ${guestSummary}
Check-In: ${checkIn.toDateString()}
Check-Out: ${checkOut.toDateString()}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message || "-"}`;

      alert(bookingSummary);

      // Reset
      setShowModal(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <Container
        className="p-4 shadow-lg font"
        style={{
          maxWidth: "95%",
          marginTop: "-55px",
          backgroundColor: "#331811",
          border: "2px solid #E2C892",
          borderRadius: "8px",
          position: "relative",
          zIndex: 999,
          color: "#E2C892",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row className="gy-3 gx-3">
            {/* Rooms */}
            <Col xs={12} sm={6} md={2}>
              <Form.Label>Rooms</Form.Label>
              <Form.Select
                style={{
                  backgroundColor: "#FFD2C7",
                  borderColor: "#331811",
                  color: "#331811",
                }}
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1}>
                    {i + 1} Room{i + 1 > 1 ? "s" : ""}
                  </option>
                ))}
                <option>10+ Rooms</option>
              </Form.Select>
            </Col>

            {/* Guests */}
            <Col xs={12} sm={6} md={3} style={{ position: "relative" }}>
              <Form.Label>No. Of Guests</Form.Label>
              <div
                className="form-control d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "#FFD2C7",
                  borderColor: "#FFD2C7",
                  color: "#331811",
                  cursor: "pointer",
                }}
                onClick={() => setShowGuests(!showGuests)}
              >
                <span style={{ fontSize: "0.9rem" }}>{guestSummary}</span>
                <span>&#9662;</span>
              </div>

              {showGuests && (
                <div
                  className="shadow rounded p-3"
                  style={{
                    position: "absolute",
                    zIndex: 10,
                    top: "100%",
                    left: 0,
                    width: "100%",
                    backgroundColor: "#FFD2C7",
                  }}
                >
                  <Row className="gx-2 gy-2">
                    <Col xs={4}>
                      <Form.Label style={{ color: "#331811" }}>Adults</Form.Label>
                      <Form.Select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                      >
                        {[...Array(10).keys()].map((n) => (
                          <option key={n + 1}>{n + 1}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col xs={4}>
                      <Form.Label style={{ color: "#331811" }}>Children</Form.Label>
                      <Form.Select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                      >
                        {[...Array(6).keys()].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col xs={4}>
                      <Form.Label style={{ color: "#331811" }}>Infants</Form.Label>
                      <Form.Select
                        value={infants}
                        onChange={(e) => setInfants(Number(e.target.value))}
                      >
                        {[...Array(6).keys()].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>

                  <div className="text-end mt-2">
                    <Button
                      size="sm"
                      variant="outline-dark"
                      onClick={() => setShowGuests(false)}
                      className="custom-done-btn"
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </Col>

            {/* Check In */}
            <Col xs={12} sm={6} md={2}>
              <Form.Label>Check In</Form.Label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="EEE, dd MMM yyyy"
                customInput={<CustomDateInput />}
              />
            </Col>

            {/* Check Out */}
            <Col xs={12} sm={6} md={2}>
              <Form.Label>Check Out</Form.Label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="EEE, dd MMM yyyy"
                customInput={<CustomDateInput />}
              />
            </Col>

            {/* Submit Button */}
            <Col xs={12} md={3} className="d-grid">
              <Button
                type="submit"
                className="fw-normal"
                style={{
                  backgroundColor: "#E2C892",
                  border: "none",
                  letterSpacing: "1px",
                  color: "#331811",
                  borderRadius: "8px",
                }}
              >
                Book Now →
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Complete Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
            {/* Display booking info */}
            <div className="mb-3 text-muted small">
              <p className="mb-1">Room(s): {rooms}</p>
              <p className="mb-1">Guests: {guestSummary}</p>
              <p className="mb-1">Check-In: {checkIn.toDateString()}</p>
              <p className="mb-3">Check-Out: {checkOut.toDateString()}</p>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleFormChange}
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
                value={formData.phone}
                onChange={handleFormChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Button type="submit" variant="dark" className="w-100 rounded-3">
              Submit Booking Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HotelBooking;
