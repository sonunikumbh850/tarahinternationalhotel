import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ServicesHeaderImage from "../components/ServicesHeaderImage";

// Service data
const services = [
  {
    title: "Accommodation",
    image: "/images/IMG_4840.jpg",
    description:
      "Uganda offers a wide range of accommodation options to suit every traveler's needs — from luxurious safari lodges and eco-resorts to budget-friendly guesthouses and urban hotels. Whether you're exploring the vibrant streets of Kampala, trekking through Bwindi Impenetrable Forest, or relaxing by the shores of Lake Victoria, you'll find comfortable and hospitable places to stay. From lakeside cottages with serene views to cozy camps in national parks, Ugandan accommodation is known for its warm hospitality, unique local charm, and often breathtaking surroundings. Many lodges and hotels also offer authentic local cuisine and guided tours to nearby attractions.",
    reverse: false,
  },
  {
    title: "Sauna",
    image: "/images/IMG_4814.jpg",
    description:
      "Enjoy deep relaxation and rejuvenation with a sauna experience in Uganda. Found in many upscale hotels, health spas, and wellness centers across Kampala and other major towns, saunas offer the perfect escape to unwind after a long day of travel or adventure. Traditional steam rooms and modern infrared saunas are both available, often combined with massage services and Jacuzzis. Whether you're looking to detox, relieve muscle tension, or simply enjoy a private moment of peace, Uganda’s sauna facilities offer comfort, warmth, and an inviting atmosphere.",
    reverse: true,
  },
  {
    title: "Restaurant & Bar",
    image: "/images/IMG_4817.jpg",
    description:
      "Experience the vibrant flavors of Uganda through its diverse restaurant and bar scene. From traditional Ugandan dishes like luwombo and matoke to international cuisine, you’ll find something to satisfy every craving. Many establishments feature live music, cultural performances, and friendly service that showcases the country's warm hospitality. Whether you're dining in a stylish rooftop bar in Kampala, enjoying grilled tilapia by the lake, or sipping cocktails in a cozy lounge, Uganda’s food and nightlife culture blends taste, ambiance, and entertainment in one unforgettable experience.",
    reverse: false,
  },
  {
    title: "Shisha",
    image: "/images/shisha.jpg",
    description:
      "Unwind in style with a smooth and flavorful shisha experience at some of Uganda’s trendiest lounges and bars. Popular in Kampala’s nightlife scene, shisha — also known as hookah — is often enjoyed in relaxed settings with ambient music, soft lighting, and cozy seating. With a wide selection of flavors ranging from fruity to exotic blends, shisha spots in Uganda offer a laid-back atmosphere perfect for socializing with friends or enjoying a chilled evening after a long day. Many venues also combine shisha with cocktails, light bites, and occasional live DJs or themed nights.",
    reverse: true,
  },
  {
    title: "Massage",
    image: "/images/massage.jpg",
    description:
      "Indulge in the soothing touch of a professional massage and let your stress melt away. Uganda’s top spas and wellness centers offer a variety of massage treatments — from deep tissue and Swedish to aromatherapy and sensual massages — designed to relax your body and refresh your mind. Whether you’re recovering from travel, looking for intimate pampering, or simply treating yourself, massage services are available in luxury hotels, private studios, and discreet wellness lounges across Kampala and beyond. Enjoy a peaceful environment, skilled hands, and a truly rejuvenating experience.",
    reverse: false,
  },
];

// Common styles
const imageStyle = {
  objectFit: "cover",
  width: "100%",
  maxWidth: "400px",
  aspectRatio: "1 / 1",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
};

// const buttonStyle = {
//   borderRadius: "10px",
//   fontWeight: "100",
// };

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#E2C892",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <ServicesHeaderImage />

      <Container>
        <div className="text-center mb-5">
          <p className="fs-5 mb-0">Our Services</p>
          <p className="text-muted fs-1 fw-light">Unmatched Hotel Facilities</p>
        </div>

        {services.map((service, index) => (
          <Row
            className="align-items-center justify-content-center text-center text-md-start my-5"
            key={index}
          >
            {service.reverse ? (
              <>
                {/* Image First */}
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded-4"
                    style={imageStyle}
                  />
                </Col>
                <Col md={6}>
                  <h2 className="fw-normal mb-4">{service.title}</h2>
                  <p style={{ color: "#555", lineHeight: "1.8",    textAlign: "justify", }}>
                    {service.description}
                  </p>
                </Col>
              </>
            ) : (
              <>
                {/* Text First */}
                <Col md={6} className="mb-4 mb-md-0">
                  <h2 className="fw-normal mb-4">{service.title}</h2>
                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.8",
                      textAlign: "justify",
                    }}
                  >
                    {service.description}
                  </p>
                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded-4"
                    style={imageStyle}
                  />
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </motion.div>
  );
};

export default Services;
