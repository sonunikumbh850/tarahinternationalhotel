import { useParams } from "react-router-dom";
import destinations from "../assets/data/destinations";
import { motion } from "framer-motion";
import { useEffect } from "react";

const formatSlug = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const DestinationDetail = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const { slug } = useParams();
  const destination = destinations[slug];

  if (!destination) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container pt-5"
         style={{ marginTop: "50px", textAlign: "center" }}
      >
        <h2 className="fw-bold mb-3">Destination Not Found</h2>
        <p className="text-muted">
          No details available for "{formatSlug(slug)}".
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container py-5"
      style={{ marginTop: "50px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="fw-bold mb-3">{destination.title}</h2>

      {/* Overview */}
      <section className="mb-4">
        <h5 className="fw-semibold">Overview</h5>
        <p>{destination.overview}</p>
      </section>

      {/* History */}
      <section className="mb-4">
        <h5 className="fw-semibold">Historical Background</h5>
        <p>{destination.history}</p>
      </section>

      {/* Location */}
      <section className="mb-4">
        <h5 className="fw-semibold">Location & Getting There</h5>
        <p><strong>Address:</strong> {destination.location.address}</p>
        <p><strong>Distance:</strong> {destination.location.distance}</p>
        <ul>
          {destination.location.transport.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Entry Details */}
      <section className="mb-4">
        <h5 className="fw-semibold">Visitor Information</h5>
        <p><strong>Opening Hours:</strong> {destination.entry.hours}</p>
        <p>
          <strong>Entry Fees:</strong><br />
          Locals – {destination.entry.fees.locals} <br />
          Foreigners – {destination.entry.fees.foreigners}
        </p>
        <p>{destination.entry.notes}</p>
      </section>

      {/* Food Options */}
      <section className="mb-4">
        <h5 className="fw-semibold">Where to Eat Nearby</h5>
        <ul>
          {destination.food.map((place, index) => (
            <li key={index}>
              <strong>{place.name}</strong>: {place.details}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default DestinationDetail;
