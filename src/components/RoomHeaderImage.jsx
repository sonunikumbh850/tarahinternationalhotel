import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";


const RoomHeaderImage = () => {
    
  return (
    <div className="pricing-header1 d-flex align-items-center">
      <Container className="text-center text-white">
        <h1 className="display-4 fw-light">Room & Restaurant List</h1>

        {/* Center wrapper for breadcrumb */}
        <div className="d-flex justify-content-center mt-3">
          <Breadcrumb>
            <Breadcrumb.Item active className="text-white">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Room & Restaurant List
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  );
};

export default RoomHeaderImage;
