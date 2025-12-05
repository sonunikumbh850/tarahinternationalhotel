import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import RoomHeaderImage from "../components/RoomHeaderImage";

const exchangeRate = 3800;

const rooms = [
  {
    title: "King Room",
    image: "/images/kingroom.jpg",
    features: ["Laundry", "Welcome Drink"],
    description:
      "Experience unmatched comfort and elegance in our spacious King Room. Perfect for couples or solo travelers, it features a plush king-size bed, modern amenities, and a tranquil ambiance designed for relaxation. Enjoy complimentary welcome drinks and laundry service for a seamless stay.",

    price: 300,
  },
  {
    title: "Family Suite",
    image: "/images/singleroom.jpg",
    features: ["Laundry", "Multi-Cuisine"],
    description:
      "Designed with families in mind, our Family Suite offers ample space, cozy furnishings, and multiple sleeping areas for a comfortable and memorable stay. Enjoy quality time together with thoughtful amenities, including complimentary laundry service and a refreshing welcome drink upon arrival.",

    price: 185,
  },
  {
    title: "Double Room",
    image: "/images/superioroom.jpg",
    features: ["Laundry", "Welcome Drink"],
    description:
      "Our Double Room is perfect for friends or couples seeking comfort and convenience. Featuring two cozy beds, modern decor, and essential amenities, it's ideal for a relaxing stay. Guests are welcomed with a complimentary drink and can enjoy hassle-free laundry service during their visit.",

    price: 280,
  },
  {
    title: "Studio Apartment",
    image: "/images/standardroom.jpg",
    features: ["Laundry", "Wellness Center"],
    description:
      "Enjoy the perfect blend of comfort and independence in our Studio Apartment. Featuring an open-plan layout with a fully equipped kitchenette, a cozy sleeping area, and modern furnishings, it's ideal for extended stays or guests who prefer a homely touch. Includes complimentary laundry service and a welcome drink to start your stay right.",

    price: 385,
  },
  {
    title: "Twin Room",
    image: "/images/deluxeroom.jpg",
    features: ["Laundry", "Mini Bar"],
    description:
      "Ideal for friends, colleagues, or siblings traveling together, our Twin Room features two separate beds, a modern design, and all the essentials for a comfortable stay. Relax with complimentary laundry service and enjoy a refreshing welcome drink upon arrival.",

    price: 210,
  },
  {
    title: "Executive Suite",
    image: "/images/studioapartment.jpg",
    features: ["Jacuzzi", "Welcome Drink"],
    description:
      "Step into luxury with our Executive Suite, designed for discerning travelers who appreciate space, style, and sophistication. This suite features a separate living area, a lavish bedroom, premium furnishings, and thoughtful amenities throughout. Enjoy personalized touches like a welcome drink and complimentary laundry service for an exceptional stay experience.",

    price: 480,
  },
  {
    title: "Classic Room",
    image: "/images/doubleroom.jpg",
    features: ["24/7 Service", "WiFi"],
    description:
      "The Classic Room blends comfort and charm with tasteful décor and essential amenities for a relaxing stay. Perfect for solo travelers or couples, it offers a serene space to unwind. Enjoy complimentary laundry service and a welcome drink as part of your experience.",

    price: 260,
  },
  {
    title: "Luxury Suite",
    image: "/images/familyroom.jpg",
    features: ["Massage", "Room Service"],
    description:
      "Indulge in the ultimate comfort and elegance in our Luxury Suite. Featuring a spacious layout with a separate lounge, exquisite furnishings, and premium amenities, this suite is crafted for guests who desire nothing but the best. Enjoy exclusive perks like a complimentary welcome drink, personalized service, and laundry service for a truly elevated stay.",

    price: 520,
  },
];

const restaurants = [
  {
    title: "Local",
    image: "/images/potatomatooke.jpg",
    features: ["Buffet", "Breakfast"],
    description: "Potatoes and Matooke",
    price: 2.79,
  },
  {
    title: "Continental",
    image: "/images/breakfast.jpg",
    features: ["Breakfast"],
    description:
      "Tropical fruits, fresh juice, tea of your choice, bread and eggs/omelet.",
    price: 4.2,
  },
  {
    title: "English",
    image: "/images/bread.jpg",
    features: ["Breakfast"],
    description:
      "Tropical fruits, fresh juice, tea of your choice, bread, eggs, sausages, beef/vegetable samosa",
    price: 5.6,
  },
  {
    title: "Dawa Tea",
    image: "/images/dawatea.jpg",
    features: ["Tea"],
    description:
      "Traditional East African herbal infusion made with fresh ginger, lemon, honey, and garlic. Known for its healing properties and comforting warmth.",
    price: 1.4,
  },
  {
    title: "African Tea",
    image: "/images/africantea.jpg",
    features: ["Tea"],
    description:
      "A creamy blend of black tea, milk, ginger, and aromatic spices — a warm and comforting East African classic.",
    price: 1.68,
  },
  {
    title: "English Tea",
    image: "/images/englishtea.jpg",
    features: ["Tea"],
    description:
      "A traditional blend of rich black tea, often served with a splash of milk. Perfect for a calm morning or a refined afternoon break. A timeless British favorite enjoyed for its smooth flavor and comforting warmth.",
    price: 1.68,
  },
  {
    title: "Lemon Tea",
    image: "/images/lemontea.png",
    features: ["Tea"],
    description:
      "Light and zesty black tea infused with fresh lemon for a refreshing twist.",
    price: 1.4,
  },
  {
    title: "Black Tea",
    image: "/images/blacktea.jpg",
    features: ["Tea"],
    description:
      "A strong, full-bodied brew made from fermented tea leaves. Enjoy it plain, sweetened, or with a slice of lemon for a rich and invigorating experience.",
    price: 1.4,
  },
  {
    title: "Green Tea",
    image: "/images/greentea.jpg",
    features: ["Tea"],
    description:
      "A smooth, mildly grassy tea packed with antioxidants. Perfect for a calming moment and a healthful boost.",
    price: 1.4,
  },
  {
    title: "Hot Chocolate",
    image: "/images/hotchocolate.jpg",
    features: ["Tea"],
    description:
      " A decadent drink made from rich cocoa and warm milk, topped with a touch of sweetness. Perfect for cozy mornings or relaxing evenings.",
    price: 1.4,
  },
  {
    title: "African Coffee",
    image: "/images/africancoffee.jpg",
    features: ["Coffee"],
    description:
      " A robust and full-bodied cup made from premium African-grown beans. Known for its earthy richness and hints of fruity or floral notes, it’s a perfect start to your day.",
    price: 1.68,
  },
  {
    title: "Garden Salad",
    image: "/images/gardensalad.jpg",
    features: ["Cold Starters"],
    description:
      "A colorful medley of fresh, assorted vegetables tossed in a light vinaigrette dressing — crisp, refreshing, and full of natural flavor.",
    price: 2.8,
  },
  {
    title: "Avocado Peer",
    image: "/images/avcodasalad.jpg",
    features: ["Cold Starters"],
    description:
      "A ripe, creamy avocado pear served fresh and lightly seasoned — perfect on its own or as a nutritious side to any meal.",
    price: 2.8,
  },
  {
    title: "Cucumber Salad",
    image: "/images/cucumbersalad.jpg",
    features: ["Cold Starters"],
    description:
      "A refreshing mix of thinly sliced cucumbers, onions, and herbs tossed in a light vinaigrette dressing — perfect as a cool, crunchy side dish.",
    price: 2.8,
  },
  {
    title: "Chicken Cream",
    image: "/images/chickencream.jpg",
    features: ["Hot Starters"],
    description:
      "Tender pieces of chicken simmered in a rich, velvety cream sauce infused with herbs and mild spices. Served warm for a comforting and flavorful experience.",
    price: 2.8,
  },
  {
    title: "Mushroom Soup",
    image: "/images/mushroomsoup.jpg",
    features: ["Hot Starters"],
    description:
      "A creamy, comforting blend of fresh mushrooms, herbs, and spices, simmered to perfection and served warm with a side of bread or crackers.",
    price: 2.8,
  },
  {
    title: "Beef Curry",
    image: "/images/beefcurry.jpg",
    features: ["Hot Starters"],
    description:
      "Tender beef chunks slow-cooked in rich, spiced curry sauce, served with your choice of rice or flatbread for a hearty and flavorful meal.",
    price: 4.2,
  },
  {
    title: "Chicken Curry",
    image: "/images/chickencurry.jpg",
    features: ["Hot Starters"],
    description:
      "Tender chicken pieces simmered in a flavorful blend of aromatic spices and creamy curry sauce, served with your choice of rice for a hearty and satisfying meal.",
    price: 5.04,
  },
  {
    title: "Fish Curry",
    image: "/images/fishcurry.jpg",
    features: ["Hot Starters"],
    description:
      "Fresh fish fillets gently cooked in a spiced coconut or tomato-based curry, infused with herbs and aromatic flavors. Served hot with rice for a wholesome, satisfying meal.",
    price: 5.04,
  },
  {
    title: "Vegetable Curry",
    image: "/images/vegcurry.jpg",
    features: ["Hot Starters"],
    description:
      "A wholesome blend of seasonal vegetables simmered in a rich, aromatic curry sauce made with traditional spices. Served hot with rice, it’s a hearty and flavorful vegetarian delight.",
    price: 4.2,
  },
  {
    title: "Beef Steak",
    image: "/images/beefsteak.jpg",
    features: ["Main Course"],
    description:
      "Juicy, tender beef steak grilled to perfection and seasoned with a blend of herbs and spices. Served with your choice of sides for a rich and satisfying main course experience.",
    price: 5.6,
  },
  {
    title: "Pepper Steak",
    image: "/images/peppersteak.jpg",
    features: ["Main Course"],
    description:
      "Succulent strips of beef stir-fried with vibrant bell peppers, onions, and a bold pepper-infused sauce. A savory, spicy favorite served hot with rice or your preferred side.",
    price: 5.6,
  },
  {
    title: "Grilled Goat BBQ",
    image: "/images/goatbbq.jpg",
    features: ["Main Course"],
    description:
      "Tender chunks of goat meat marinated in a blend of local spices and slow-grilled over open flames for a smoky, juicy flavor. Served hot with your choice of sides — a true barbecue favorite.",
    price: 5.6,
  },
  {
    title: "Grilled Goat Ribs",
    image: "/images/GoatRibs.jpg",
    features: ["Main Course"],
    description:
      "Succulent goat ribs marinated in a blend of traditional spices, then expertly grilled to achieve a smoky, tender finish. Served hot with your choice of sides for a truly satisfying main course.",
    price: 5.6,
  },
  {
    title: "Sweet and Sour Goat",
    image: "/images/soursweetgoat.jpg",
    features: ["Main Course"],
    description:
      "Locally sourced goat meat slow-cooked until tender, then simmered in a rich sweet and sour sauce with Ugandan spices and fresh vegetables. Served with rice, matoke, or posho for a truly homestyle taste of Uganda.",
    price: 5.6,
  },
  {
    title: "Grilled Goat Platter",
    image: "/images/charcoalgoat.jpg",
    features: ["Main Course"],
    description:
      "A generous serving of tender, charcoal-grilled goat cuts marinated in traditional Ugandan spices. Served with a variety of local sides like matoke, kachumbari, chapati, or posho — perfect for sharing or indulging solo.",
    price: 15.41,
  },
  {
    title: "Chicken in Basket",
    image: "/images/chickenbasket.jpg",
    features: ["Main Course"],
    description:
      "Crispy, golden-fried chicken pieces served in a basket with a side of fries and a dipping sauce. A classic, satisfying meal perfect for any time of day.",
    price: 8.4,
  },
  {
    title: "Caesar Whole Chicken",
    image: "/images/ceaserchicken.jpg",
    features: ["Main Course"],
    description:
      "A whole roasted chicken marinated in Caesar-style herbs and spices, slow-cooked to golden perfection. Served with a crisp side salad and your choice of starch for a rich and satisfying dining experience.",
    price: 22.41,
  },
  {
    title: "Whole Fish",
    image: "/images/wholefish.jpg",
    features: ["Main Course"],
    description:
      "Fresh whole fish, seasoned with local herbs and spices, then grilled or deep-fried to a crispy golden finish. Served with a choice of sides like matoke, posho, or fries — a true taste of Ugandan tradition.",
    price: 8.4,
  },
  {
    title: "Fish Fingers",
    image: "/images/fishfinger.jpg",
    features: ["Main Course"],
    description:
      "Crispy golden fish fillets coated in seasoned breadcrumbs and deep-fried to perfection. Served with fries and a tangy dipping sauce — a delicious choice for both kids and adults.",
    price: 5.6,
  },
  {
    title: "Chicken Breast",
    image: "/images/chickenbreast.jpg",
    features: ["Main Course"],
    description:
      "Juicy, boneless chicken breast grilled or pan-seared to perfection, seasoned with a blend of herbs and spices. Served with your choice of side for a light yet satisfying main course.",
    price: 5.6,
  },
  {
    title: "Chicken Wings",
    image: "/images/chickenwings.jpg",
    features: ["Main Course"],
    description:
      "Crispy and juicy chicken wings tossed in your choice of sauce — from spicy to tangy or sweet. Perfect as a starter or shared platter, served with a side of dipping sauce or fries.",
    price: 4.2,
  },
  {
    title: "Lemon Juice",
    image: "/images/lemonjuice.jpg",
    features: ["Juices"],
    description:
      "Freshly squeezed lemon juice served chilled, offering a zesty burst of citrus flavor. Light, tangy, and perfect for cooling down on a warm day.",
    price: 1.4,
  },
  {
    title: "Passion Fruit Juice",
    image: "/images/PassionFruitJuice.jpg",
    features: ["Juices"],
    description:
      "A refreshing tropical drink made from freshly blended passion fruit, lightly sweetened and served chilled. Bursting with bold, tangy flavor — a perfect thirst-quencher any time of day.",
    price: 1.4,
  },
  {
    title: "Melon Juice",
    image: "/images/melonjuice.jpg",
    features: ["Juices"],
    description:
      "Naturally sweet and hydrating juice made from fresh, ripe melon. Served chilled for a light, fruity refreshment that’s perfect on a sunny day.",
    price: 1.4,
  },
  {
    title: "Orange Juice",
    image: "/images/Orangejuice.jpg",
    features: ["Juices"],
    description:
      "Freshly squeezed from ripe oranges, this vibrant juice is naturally sweet, rich in vitamin C, and served chilled for a refreshing burst of citrus flavor.",
    price: 1.4,
  },
  {
    title: "Mocktail",
    image: "/images/mocktail.jpg",
    features: ["Juices"],
    description:
      "A colorful, non-alcoholic blend of fresh fruit juices, herbs, and soda — expertly mixed to deliver a refreshing and flavorful experience without the buzz. Perfect for any occasion.",
    price: 2.8,
  },
  {
    title: "Beetroot Juice",
    image: "/images/beetrootjuice.jpg",
    features: ["Juices"],
    description:
      "A vibrant, nutrient-rich juice made from fresh beetroot, known for its earthy sweetness and health-boosting benefits. Served chilled for a naturally refreshing and revitalizing drink.",
    price: 1.4,
  },
  {
    title: "Sodas",
    image: "/images/sodas.jpg",
    features: ["Juices"],
    description:
      "A selection of chilled, fizzy soft drinks to refresh and satisfy. Choose from popular flavors like Cola, Lemon-Lime, Orange, and more — perfect for pairing with any meal.",

    price: 0.56,
  },
  {
    title: "Reb Label {Big}",
    image: "/images/redlabel.jpg",
    features: ["Beers & Wines"],
    description:
      "Johnnie Walker Red Label is a bold, characterful Scotch whisky known for its vibrant, smoky flavor and spicy finish. Ideal for mixing or enjoying over ice, it’s a dynamic blend perfect for any occasion.",
    price: 28.01,
  },
  {
    title: "Reb Label {Medium}",
    image: "/images/redlabelmedium.jpg",
    features: ["Beers & Wines"],
    description:
      "Johnnie Walker Red Label is a bold, characterful Scotch whisky known for its vibrant, smoky flavor and spicy finish. Ideal for mixing or enjoying over ice, it’s a dynamic blend perfect for any occasion.",
    price: 14.01,
  },
  {
    title: "Reb Label {Small}",
    image: "/images/redlabelmedium.jpg",
    features: ["Beers & Wines"],
    description:
      "Johnnie Walker Red Label is a bold, characterful Scotch whisky known for its vibrant, smoky flavor and spicy finish. Ideal for mixing or enjoying over ice, it’s a dynamic blend perfect for any occasion.",
    price: 8.4,
  },
  {
    title: "Crazy Cock",
    image: "/images/crazycock.jpg",
    features: ["Beers & Wines"],
    description:
      "A bold and spirited cocktail blending local gin with citrus, sweet syrup, and a spicy kick — served chilled for a wild, unforgettable burst of flavor.",
    price: 11.2,
  },
  {
    title: "Beacon",
    image: "/images/beacon.jpg",
    features: ["Beers & Wines"],
    description:
      "Beacon Beer is a smooth, easy-drinking lager brewed in Uganda. With a crisp finish and balanced malt flavor, it's perfect for relaxing moments or pairing with your favorite meal.",
    price: 8.4,
  },
  {
    title: "Bond 7",
    image: "/images/bond7.jpg",
    features: ["Beers & Wines"],
    description:
      "Bond 7 Whisky is a smooth, full-bodied spirit with notes of oak, caramel, and subtle spice. Distilled for character and warmth, it’s a popular choice for sipping neat, on the rocks, or mixed with soda.",
    price: 11.21,
  },
  {
    title: "Bond 7 (Small)",
    image: "/images/bond7.jpg",
    features: ["Beers & Wines"],
    description:
      "Bond 7 Whisky is a smooth, full-bodied spirit with notes of oak, caramel, and subtle spice. Distilled for character and warmth, it’s a popular choice for sipping neat, on the rocks, or mixed with soda.",
    price: 2.8,
  },
  {
    title: "Ruby Wine",
    image: "/images/ruby-wine.jpg",
    features: ["Beers & Wines"],
    description:
      "Ruby wine is a vibrant, sweet red fortified wine bursting with rich berry flavors and youthful charm.",
    price: 8.4,
  },
  {
    title: "Gilbey’s Whisky",
    image: "/images/gilbeys.jpg",
    features: ["Beers & Wines"],
    description:
      "Gilbey’s Whisky is a historic blended Scotch known for its smooth, mellow flavor with hints of caramel, oak, and gentle smoke. Originally crafted by W&A Gilbey in the 20th century",
    price: 12.6,
  },
];

const RoomRestaurant = () => {
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
      <RoomHeaderImage />

      {/* Rooms Section */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <p className="fs-5 room-subtitle mb-0">Rooms & Suites</p>
          <p className="text-muted fw-light display-6 room-heading">
            Choose Your Room Here
          </p>
        </div>

        <Row className="g-4">
          {rooms.map((room, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="border-0 shadow-sm h-100 rounded-4 room-card">
                <Card.Img
                  variant="top"
                  src={room.image}
                  alt={room.title}
                  className="room-img"
                />
                <Card.Body className="room-body" style={{ color: "#331811" }}>
                  <Card.Title className="fw-semibold room-title mb-1">
                    {room.title}
                  </Card.Title>
                  <Card.Text className="small text-muted room-feature mb-2">
                    {room.features.join(" | ")}
                  </Card.Text>
                  <Card.Text className="room-description small mb-2">
                    {room.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center gap-5">
                    <div>
                      <p
                        className="mb-0 fw-normal"
                        style={{ fontSize: "14px" }}
                      >
                        Starts From
                      </p>
                      <h5 className="fw-bold mb-1" style={{ fontSize: "16px" }}>
                        ${room.price}
                      </h5>
                      <p
                        className="text-muted mb-3"
                        style={{ fontSize: "12px" }}
                      >
                        UGX{" "}
                        {new Intl.NumberFormat("en-UG").format(
                          room.price * exchangeRate
                        )}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button
                        style={{
                          borderRadius: "8px",
                          backgroundColor: index === 0 ? "#e2c892" : "#331811",
                          color: index === 0 ? "#331811" : "#e2c892",
                          border: "none",
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Restaurant Section */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <p className="fs-5 room-subtitle mb-0">Our Buffets</p>
          <p className="text-muted fw-light display-6 room-heading">
            Breakfast • Lunch • Dinner
          </p>
        </div>

        <Row className="g-4">
          {restaurants.map((restaurant, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="border-0 shadow-sm h-100 rounded-4 room-card">
                <Card.Img
                  variant="top"
                  src={restaurant.image}
                  alt={restaurant.title}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body
                  style={{ color: "#331811", backgroundColor: "#ffd2c7" }}
                >
                  <Card.Title className="fw-semibold mb-1">
                    {restaurant.title}
                  </Card.Title>
                  <Card.Text className="small text-muted mb-1">
                    {restaurant.features.join(" | ")}
                  </Card.Text>
                  <Card.Text className="small mb-2">
                    {restaurant.description}
                  </Card.Text>
                  <div>
                    <p className="mb-0 fw-normal" style={{ fontSize: "14px" }}>
                      Starting Price
                    </p>
                    <h6 className="fw-bold mb-0" style={{ fontSize: "16px" }}>
                      ${restaurant.price}
                    </h6>
                    <p
                      className="text-muted"
                      style={{ fontSize: "13px", marginBottom: 0 }}
                    >
                      UGX{" "}
                      {new Intl.NumberFormat("en-UG").format(
                        restaurant.price * exchangeRate
                      )}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default RoomRestaurant;
