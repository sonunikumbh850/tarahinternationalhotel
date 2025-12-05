import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    image: "/images/personreview1.jpg",
    name: "John Doe",
    title: "Accountant",
    rating: 5,
    review:
      "An incredible place to stay in Uganda! I’ll definitely return. The atmosphere was relaxing, the service was exceptional, and the location couldn’t have been better — truly top-notch",
  },
  {
    image: "/images/personreview2.jpg",
    name: "Jane Smith",
    title: "Travel Blogger",
    rating: 5,
    review:
     "Exceptional experience in Uganda — from the warm hospitality to the stunning scenery. Highly recommended for all types of travelers!"
  },
  {
    image: "/images/personreview3.jpg",
    name: "Ali Khan",
    title: "Photographer",
    rating: 5,
    review:
      "Peaceful, beautiful, and unforgettable. Every corner of the place told a unique story — from the decor to the views. I’ll definitely visit again."
  },
  {
    image: "/images/personreview4.jpg",
    name: "Sara Kim",
    title: "Entrepreneur",
    rating: 5,
    review:
      "Amazing service and excellent value for money. Every moment was enjoyable — I absolutely loved every bit of it!"
  },
  {
    image: "/images/personreview5.jpg",
    name: "Liam Wong",
    title: "Engineer",
    rating: 5,
    review:
     "If you’re looking for a truly relaxing and culturally rich experience in Uganda, this is the place to be.",
  },
  {
    image: "/images/personreview2.jpg",
    name: "Mary W.",
    title: "Writer",
    rating: 5,
    review:
     "Fantastic trip! The staff made me feel completely at home. I left with memories that will last a lifetime."
  },
];

const getChunks = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const ReviewSection = () => {
  const [index, setIndex] = useState(0);
  const [chunkSize, setChunkSize] = useState(getChunkSize());

  function getChunkSize() {
    const width = window.innerWidth;
    return width < 576 ? 1 : width < 768 ? 2 : 3;
  }

  const updateChunkSize = () => setChunkSize(getChunkSize());

  useEffect(() => {
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const slides = getChunks(reviews, chunkSize);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h1 className="fw-light fs-2">Traveler’s Experiences</h1>
        <p className="text-muted small fst-italic">
          "Here’s some awesome feedback from our travelers"
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="gx-4 gy-4 justify-content-center">
            {slides[index].map((item, i) => (
              <Col
                key={i}
                xs={12}
                sm={6}
                md={4}
                className="d-flex align-items-stretch"
              >
                <Card
                  className="p-3 shadow-sm border-0 rounded-4 w-100" 
                  style={{
                     height: "250px",
                    backgroundColor: "#FFD2C7",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Header */}
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={item.image}
                      roundedCircle
                      width="50"
                      height="50"
                      className="me-3"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold fs-6">{item.name}</h6>
                      <small className="text-muted">{item.title}</small>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="small flex-grow-1" style={{ fontSize: "0.9rem" }}>
                    {item.review}
                  </p>

                  {/* Stars */}
                  <div className="text-warning d-flex gap-1 mt-3">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default ReviewSection;
