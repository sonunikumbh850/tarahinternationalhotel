import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const destinations = [
  {
    image: "/images/KasubiTombs.jpg",
    title: "Kasubi Tombs",
    location: "Kampala, Uganda",
  },
  {
    image: "/images/UgandaMartyrs.jpeg",
    title: "Uganda Martyrs Shrine",
    location: "Namugongo, Uganda",
  },
  {
    image: "/images/BwindiNationalPark.jpg",
    title: "Bwindi Impenetrable National Park",
    location: "Kanungu, Southwestern Uganda",
  },
  {
    image: "/images/murchisonfalls.jpg",
    title: "Murchison Falls National Park",
    location: "Masindi, Northwest Uganda",
  },
  {
    image: "/images/KabakasPalace.jpg",
    title: "Kabaka’s Palace and Bulange",
    location: "Kampala, Uganda",
  },
  {
    image: "/images/kampalabeach.jpg",
    title: "Sipi Falls",
    location: "Kapchorwa, Eastern Uganda",
  },
];

// Responsive config
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
};

const PopularDestination = () => {
  return (
    <Container className="py-5">
      <h1 className="fw-light mb-2">Popular Destinations</h1>
      <p className="text-muted mb-4">
        <i>
          "Most popular destinations around{" "}
          <span className="fw-bold">Uganda</span>, from historical places to
          natural wonders."
        </i>
      </p>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        arrows={false}
        showDots={false}
        customButtonGroup={<CustomControls />}
        renderButtonGroupOutside
        itemClass="px-2"
      >
        {destinations.map((item, idx) => (
          <div key={idx} className="h-100">
            <Link
              to={`/destinations/${item.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="text-decoration-none"
            >
              <Card
                className="border-0 h-100"
                style={{ backgroundColor: "#FFD2C7" }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      className="fw-normal"
                      style={{ color: "#331811" }}
                    >
                      {item.title}
                    </Card.Title>
                    <Card.Text>
                      <FaMapMarkerAlt
                        className="me-2"
                        style={{ color: "#331811" }}
                      />
                      <span style={{ color: "#331811" }}>{item.location}</span>
                    </Card.Text>
                  </div>
                  <div className="read-more-btn mt-3">Read More →</div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

// Custom navigation buttons
const CustomControls = ({ next, previous }) => (
  <div className="text-center mt-4">
    <Button size="sm" style={{backgroundColor: "#331811", border: "none", color: "#e2c892"}} className="me-2 nav-btn" onClick={previous}>
      &lt; Prev
    </Button>
    <Button size="sm" style={{backgroundColor: "#331811", border: "none", color: "#e2c892"}} className="nav-btn" onClick={next}>
      Next &gt;
    </Button>
  </div>
);

export default PopularDestination;
