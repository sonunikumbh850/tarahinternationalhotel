import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";
import BannerSliders from "../components/BannerSliders";
import HotelBooking from "../components/HotelBooking";
import PopularDestination from "../components/PopularDestination";
import BlogSection from "../components/BlogSection";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
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
      <Container fluid className="p-0 m-0">
        <BannerSliders />
        {/* <HotelBooking /> */}
        <PopularDestination />
        <BlogSection />
        <ReviewSection />
      </Container>
    </motion.div>
  );
}
