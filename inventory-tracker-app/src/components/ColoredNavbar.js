import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function NavScrollExample() {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="home" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="item" href="/items">
              Items
            </Nav.Link>
            <Nav.Link className="checkout" href="/checkedout">
              Checked Out Items
            </Nav.Link>
            <Nav.Link className="resource" href="/resources">
              Resources
            </Nav.Link>
            <Nav.Link className="about" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
