import React from "react";
import { Carousel, Container } from "react-bootstrap";

const imageData = [
  { src: "/images/accomdation.jpg", slogan: "\"Sleep in comfort, wake in the Pearl of Africa.\"" },
  { src: "/images/steambath.jpg", slogan: "\"Breathe in healing steam, feel the spirit of wellness.\"" },
  { src: "/images/restaurant.jpg", slogan: "\"Taste Uganda — every bite tells a story.\"" },
  { src: "/images/shisha.jpg", slogan: "\"Unwind with flavor, connect over clouds.\"" },
  { src: "/images/bar.jpg", slogan: "\"Raise a glass, the Ugandan vibe never ends.\"" },
  { src: "/images/massage.jpg", slogan: "\"Let skilled hands bring you peace and balance.\"" },
];

const BannerSliders = () => {
  return (
    <Container fluid className="px-0">
      <Carousel fade interval={3000} wrap controls indicators>
        {imageData.map((item, index) => (
          <Carousel.Item key={index} style={{ position: "relative" }}>
            <img
              className="d-block w-100 slider-image"
              src={item.src}
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay */}
            <div className="slider-overlay" />

            {/* Slogan Text */}
            <div className="slider-text">
              <h2 className="slider-slogan1">{item.slogan}</h2>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default BannerSliders;
