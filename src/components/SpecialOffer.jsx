import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const offers = [
  {
    image: "/images/pricebedroom.jpg",
    title: "Accommodation",
    price: 500,
    rating: 4,
    description:
      "Enjoy a relaxing coastal escape with rich culture, history, and architecture in beautiful Lisbon.",
  },
  {
    image: "/images/steambath.jpg",
    title: "Sauna",
    price: 800,
    rating: 5,
    description:
      "Explore ancient ruins, delicious Mediterranean cuisine, and vibrant street life in Athens.",
  },
  {
    image: "/images/bar.jpg",
    title: "Restaurant & Bar",
    price: 750,
    rating: 5,
    description:
      "Step into history with iconic sites like the Colosseum and Vatican City in Rome.",
  },
  {
    image: "/images/spawellness.jpg",
    title: "Massage",
    price: 900,
    rating: 5,
    description:
      "Fall in love with the City of Light—romantic cafes, the Eiffel Tower, and timeless fashion.",
  },
  // {
  //   image: "/images/EiffelTower.jpg",
  //   title: "Cairo, Egypt",
  //   price: 600,
  //   rating: 4,
  //   description:
  //     "Discover ancient pyramids and vibrant markets in the heart of Egypt's capital.",
  // },
  // {
  //   image: "/images/EiffelTower.jpg",
  //   title: "Kampala, Uganda",
  //   price: 400,
  //   rating: 4,
  //   description:
  //     "Experience culture, nightlife, and local charm in Uganda’s lively capital.",
  // },
];

// Responsive breakpoints
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
};

const SpecialOffer = () => {
  return (
    <Container className="py-3">
      <h1 className="fw-light text-center">Special Offer</h1>
      <p className="text-muted text-center mb-4">
        <i>"Check out our special offer and discounts"</i>
      </p>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomArrows />}
        itemClass="px-2"
      >
        {offers.map((offer, idx) => (
          <div key={idx} className="h-100">
            <Card className="rounded-4 shadow-sm h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={offer.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body
                className="d-flex flex-column justify-content-between rounded-2"
                style={{ backgroundColor: "#FFD2C7" }}
              >
                <div>
                  <Card.Title
                    className="fw-normal"
                    style={{ color: "#331811" }}
                  >
                    {offer.title}
                  </Card.Title>
                  <div className="mb-2 text-warning">
                    {"★".repeat(offer.rating)}
                    {"☆".repeat(5 - offer.rating)}
                  </div>
                  <Card.Text
                    className="text-muted"
                    style={{ color: "#331811", fontSize: "14px" }}
                  >
                    {offer.description}
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-semiBold" style={{ color: "#331811" }}>
                    From €<span className="fw-bold">{offer.price}</span>
                  </span>
                  <Button
                    style={{
                      backgroundColor: "#331811",
                      borderRadius: "8px",
                      border: "none",
                      color: "#E2C892",
                      // fontWeight: "100",
                    }}
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

// Custom Arrow Buttons Below Carousel
const CustomArrows = ({ next, previous }) => (
  <div className="text-center mt-4">
    <Button
      // variant="outline-dark"
      style={{ backgroundColor: "#331811", border: "none", color: "#e2c892" }}
      size="sm"
      className="me-2"
      onClick={previous}
    >
      ‹ Prev
    </Button>
    <Button
      // variant="outline-dark"
      style={{ backgroundColor: "#331811", border: "none", color: "#e2c892" }}
      size="sm"
      onClick={next}
    >
      Next ›
    </Button>
  </div>
);

export default SpecialOffer;
