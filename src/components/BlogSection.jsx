import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const BlogSection = () => {
  return (
    <Container className="py-5">
      {/* Section Heading */}
      <div className="text-start mb-4">
        <h1 className="fw-light">Our Blog</h1>
        <p className="text-muted">
          <i>
            "Discover the incredible experiences awaiting you in{" "}
            <span className="fw-bold">Uganda</span>."
          </i>
        </p>
      </div>

      {/* Blog Content */}
      <Row className="align-items-stretch gy-4 flex-column-reverse flex-md-row">
        {/* Blog Image */}
        <Col md={6}>
          <div
            className="h-100"
            style={{
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <Image
              src="/images/kampalabeach.jpg"
              alt="Beautiful Uganda"
              fluid
              className="blog-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
        </Col>
        {/* Blog Text */}
        <Col md={6} className="d-flex flex-column justify-content-between">
          <div style={{ color: "#331811" }}>
            <h3 className="fw-bold">
              Beautiful Uganda
              <br />
              <span className="fw-light">Let’s travel!</span>
            </h3>
            <p
              className="text-muted mt-3 specialoffer-title"
              style={{ color: "#331811", textAlign: "justify" }}
            >
              Uganda — The Pearl of Africa — is more than just a destination;
              it's a feeling. A heartbeat of adventure, a rhythm of cultures,
              and a canvas painted with waterfalls, wildlife, and warm smiles.
              <br />
              <br />
              From misty mountains to lush savannahs, this country offers an
              unforgettable blend of nature, history, and hospitality.
              <br />
              <br />
              🦍 Bwindi’s gentle mountain gorillas.
              <br />
              🌊 Murchison Falls' thunderous roar.
              <br />
              🕌 Namugongo Shrine’s spiritual calm.
              <br />
              🏙️ Kampala’s vibrant energy.
              <br />
              <br />
              And above all — it’s about the people, their stories, food, and
              joy. Picture sipping Ugandan coffee at sunrise, or dancing to
              drums in a village celebration.
              <br />
              <br />
              📌 Stay tuned for guides, hidden gems, local adventures, and
              cultural deep-dives.
              <br />
              <br />
              ✈️ Beautiful Uganda is calling. Let’s travel!
            </p>
          </div>
          {/* <p
            className="mt-3 fw-semibold text-end"
            style={{ cursor: "pointer", color: "#331811" }}
          >
            Read More →
          </p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;
