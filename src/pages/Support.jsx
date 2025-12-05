import { motion } from "framer-motion";
import { useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import SupportHeaderImage from "../components/SupportHeaderImage";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      style={{
        backgroundColor: "#E2C892",
        width: "100%",
        minHeight: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SupportHeaderImage />

      <Container style={{ color: "#331811" }}>
        <div className="text-center mb-5">
          <p className="text-muted fw-light display-6 room-heading">Support</p>
        </div>
        <p className="text-center text-muted mb-5">
          Find answers to commonly asked questions or contact our support team.
        </p>

        {/* FAQ Section */}
        <h4 className="mb-4">Frequently Asked Questions</h4>
              <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              style={{ backgroundColor: "#FF7757", color: "#331811" }}
            >
              How do I make a reservation?
            </Accordion.Header>
            <Accordion.Body
                          style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
                     
            >
              You can book directly through our website by selecting your
              desired room, dates, and completing the booking form. You will
              receive a confirmation email once your reservation is successful.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              What is your cancellation policy?
            </Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              You can cancel up to 48 hours before your check-in date for a full
              refund. Cancellations made after that or no-shows may not be
              refunded. Please refer to our full cancellation policy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              Do you offer airport pickup?
            </Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              Yes, we offer airport pickup and drop-off services on request.
              Please contact us at least 24 hours in advance to arrange
              transportation.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" >
            <Accordion.Header
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              What amenities are included in the rooms?
            </Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#FFD2C7", color: "#331811" }}
            >
              All our rooms come with free Wi-Fi, air conditioning, ensuite
              bathrooms, complimentary toiletries, and daily housekeeping.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Contact Section */}
        <h4 className="mt-4">9. Contact Us</h4>
        <p>
          <strong>Tarah International Hotel</strong>
        </p>
        <div className="mb-2">
          <strong>Email:</strong> info@tarahinternationalhotel.com
        </div>
        <div className="mb-2">
          <strong>Phone:</strong> +256 789 669125
        </div>
        <div className="mb-2">
          <strong>Website:</strong> www.tarahinternationalhotel.com
        </div>
        <div className="mb-2">
          <strong>Address:</strong> Buziga, Kampala City, UGANDA
        </div>
      </Container>
    </motion.div>
  );
};

export default Support;
