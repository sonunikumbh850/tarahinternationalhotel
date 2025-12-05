import { motion } from "framer-motion";
import { useEffect } from "react";
import PrivacyPolicyHeaderImage from "../components/PrivacyPolicyHeaderImage";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
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
      <PrivacyPolicyHeaderImage />

      <Container style={{color:"#331811"}}>
        <div className="text-center mb-5">
          <p className="text-muted fw-light display-6 room-heading">
            Privacy Policy
          </p>
        </div>
        <p>
          At <strong>Tarah International Hotel</strong>, we value your privacy
          and are committed to protecting your personal data. This policy
          outlines how we collect, use, disclose, and safeguard your information
          when you visit our website or stay with us.
        </p>

        <h4 className="mt-5">1. Information We Collect</h4>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            address, ID/passport number (when required for check-in).
          </li>
          <li>
            <strong>Booking Information:</strong> Room preferences, payment
            details, travel dates.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages
            visited, and device information.
          </li>
          <li>
            <strong>Communication Records:</strong> Emails, inquiries, feedback,
            and customer service interactions.
          </li>
        </ul>

        <h4 className="mt-4">2. How We Use Your Information</h4>
        <ul>
          <li>To process and confirm your reservations</li>
          <li>To personalize your stay and improve our services</li>
          <li>To send booking confirmations, special offers, and updates</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h4 className="mt-4">3. Sharing of Your Information</h4>
        <p>
          We do <strong>not sell</strong> your personal data. However, we may
          share it with:
        </p>
        <ul>
          <li>
            <strong>Trusted third parties</strong> (e.g., payment gateways,
            booking partners)
          </li>
          <li>
            <strong>Legal authorities</strong> to comply with applicable laws
          </li>
          <li>
            <strong>Hotel staff</strong> to provide service during your stay
          </li>
        </ul>

        <h4 className="mt-4">4. Data Security</h4>
        <p>
          We implement industry-standard technical and organizational measures
          to protect your personal data from unauthorized access, disclosure, or
          misuse.
        </p>

        <h4 className="mt-4">5. Your Rights</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
          <li>Request a copy of your data</li>
        </ul>
        <p>
          To exercise these rights, contact us at:{" "}
          <strong>info@tarahinternationalhotel.com</strong>.
        </p>

        <h4 className="mt-4">6. Cookies & Analytics</h4>
        <p>
          We use cookies to enhance your experience and track usage. You can
          manage cookies via your browser settings.
        </p>

        <h4 className="mt-4">7. Third-Party Links</h4>
        <p>
          Our site may contain links to other websites. We are not responsible
          for their content or privacy practices.
        </p>

        <h4 className="mt-4">8. Changes to This Policy</h4>
        <p>
          We may update this policy. Revisions will be posted on this page with
          the effective date.
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

export default PrivacyPolicy;
