import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa";
import GalleryHeaderImage from "../components/GalleryHeaderImage";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const images = [
  "/hotelImages/IMG_4802.jpg",
  "/hotelImages/IMG_4799.jpg",
  "/hotelImages/IMG_4805.jpg",
  "/hotelImages/IMG_4807.jpg",
  "/hotelImages/IMG_4808.jpg",
  "/hotelImages/IMG_4810.jpg",
  "/hotelImages/IMG_4815.jpg",
  "/hotelImages/IMG_4816.jpg",
  "/hotelImages/IMG_4820.jpg",
  "/hotelImages/IMG_4823.jpg",
  "/hotelImages/IMG_4825.jpg",
  "/hotelImages/IMG_4826.jpg",
  "/hotelImages/IMG_4828.jpg",
  "/hotelImages/IMG_4829.jpg",
  "/hotelImages/IMG_4830.jpg",
  "/hotelImages/IMG_4833.jpg",
  "/hotelImages/IMG_4835.jpg",
  "/hotelImages/IMG_4841.jpg",
  "/hotelImages/IMG_4846.jpg",
  "/hotelImages/IMG_4843.jpg",
];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!show) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [show]);

  return (
    <motion.div
      className="fade-in"
      style={{ backgroundColor: "#E2C892", minHeight: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GalleryHeaderImage />
      <Container className="text-center py-5">
        <div className="text-center mb-5">
          <p className="fs-5 room-subtitle mb-0">Where Comfort Meets Class</p>
          <p className="text-muted fw-light display-6 room-heading">
            Inside Our Hotel Walls
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {images.map((img, index) => (
            <Col key={index} xs={10} sm={6} md={4} lg={3}>
              <div
                className="gallery-image-wrapper"
                onClick={() => handleShow(index)}
              >
                <img src={img} alt={`Gallery ${index}`} className="img-fluid" />
                <div className="icon-overlay">
                  <FaSearchPlus />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          centered
          size="xl"
          contentClassName="custom-modal-content"
          dialogClassName="custom-modal-dialog"
          backdropClassName="custom-modal-backdrop"
        >
          <Modal.Body className="text-center">
            <div className="modal-image-wrapper mx-auto">
              <img
                src={images[currentIndex]}
                alt={`Zoomed ${currentIndex}`}
                className="w-100 h-100 rounded-3"
                style={{ objectFit: "contain" }}
              />
            </div>

          <div className="modal-navigation-overlay">
<Button className="modal-nav-btn left" onClick={handlePrev}>
  <FaChevronLeft size={20} />
</Button>

<Button className="modal-nav-btn right" onClick={handleNext}>
  <FaChevronRight size={20} />
</Button>
</div>
          </Modal.Body>
        </Modal>
      </Container>
    </motion.div>
  );
};

export default Gallery;
