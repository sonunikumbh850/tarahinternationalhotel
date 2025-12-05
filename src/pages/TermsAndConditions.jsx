import { motion } from "framer-motion";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import TermConditionsHeaderImage from "../components/TermConditionsHeaderImage";

const TermsAndConditions = () => {
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
      <TermConditionsHeaderImage />

      <Container style={{color: "#331811"}}>
        <div className="text-center mb-5">
          <p className="text-muted fw-light display-6 room-heading">
            Terms & Conditions
          </p>
        </div>
        <p>
          These Terms and Conditions ("Terms") govern your use of the website
          and services provided by <strong>Tarah International Hotel</strong>.
          By accessing or booking through our website, you agree to be bound by
          these Terms.
        </p>

        <h4 className="mt-5">1. Booking & Reservations</h4>
        <ul>
          <li>All bookings are subject to availability and confirmation.</li>
          <li>
            A valid ID proof is mandatory at check-in for all guests as per
            local regulations.
          </li>
          <li>
            Reservations can be made online through our website or by contacting
            our reservation desk.
          </li>
        </ul>

        <h4 className="mt-4">2. Cancellation & Refund Policy</h4>
        <ul>
          <li>
            Cancellations made 48 hours before check-in are eligible for a full
            refund.
          </li>
          <li>
            No refund will be provided for cancellations within 48 hours of
            check-in or no-shows.
          </li>
          <li>
            Special offers and non-refundable rates are not eligible for
            cancellations or refunds.
          </li>
        </ul>

        <h4 className="mt-4">3. Guest Conduct</h4>
        <ul>
          <li>Guests must behave respectfully and avoid disturbing others.</li>
          <li>
            The hotel reserves the right to deny service or evict guests found
            violating rules or damaging property.
          </li>
          <li>No illegal activities are permitted on hotel premises.</li>
        </ul>

        <h4 className="mt-4">4. Check-in & Check-out</h4>
        <ul>
          <li>
            <strong>Check-in time:</strong> [e.g., 2:00 PM]
          </li>
          <li>
            <strong>Check-out time:</strong> [e.g., 11:00 AM]
          </li>
          <li>
            Early check-in or late check-out is subject to availability and may
            incur additional charges.
          </li>
        </ul>

        <h4 className="mt-4">5. Liability</h4>
        <p>
          Tarah International Hotel shall not be held responsible for loss or
          damage to personal belongings, delays, or issues caused by external
          factors such as natural disasters, strikes, or government actions.
        </p>

        <h4 className="mt-4">6. Modifications</h4>
        <p>
          We reserve the right to modify or update these Terms at any time
          without prior notice. Continued use of the website or services implies
          acceptance of the updated Terms.
        </p>

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

export default TermsAndConditions;
