import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import pdf from "../../src/af1297.pdf";

const StyledA = styled.a`
  text-decoration: none;
`;

const StyledDiv = styled.div`
  height: 100vh;
  margin-bottom: 30%;
`;

export const Resources = () => {
  const [data, setData] = useState("");
  // console.log("Data",data);
  // const fileData = JSON.stringify(data);
  // console.log("Stringified", fileData);

  const handleSubmit = (e) => {
      //const fileData = JSON.stringify(data);
      const blob = new Blob([data], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "grocery-list.txt";
      link.href = url;
      link.click();
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <StyledDiv>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <p>
                Need some tips on tracking inventory? Checkout these useful
                resources.
              </p>
              <Card.Body>
                <Card.Img
                  src="/images/inventory-tracking.jpeg"
                  alt="inventory_image"
                  style={{ width: "400px", height: "200px" }}
                />
                <Card.Title>
                  <StyledA
                    href="https://www.netsuite.com/portal/resource/articles/inventory-management/inventory-tracking.shtml"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inventory Tracking Simplified: Steps, Methods and Efficiency
                    Tips
                  </StyledA>
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Img
                  src="https://gtpac.org/wp-content/uploads/2014/06/GSA-logo.png"
                  alt="gsa_image"
                  style={{ width: "400px", height: "200px" }}
                />
                <Card.Title>
                  <StyledA
                    href="https://www.gsa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    U.S. General Services Administration
                  </StyledA>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <p>
                Below is the AF1927. Click{"\u00A0"}
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
                {"\u00A0"}
                to have it handy!
              </p>
              <Card.Img
                src="./images/1297.png"
                alt="1297"
                style={{
                  width: "40rem",
                  height: "40rem",
                }}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <p>
                Need supplies? Visit the nearest supply store. Use the Get
                Directions link.
              </p>
              <iframe
                width="500"
                height="400"
                frameBorder="0"
                src="https://www.bing.com/maps/embed?h=400&w=500&cp=38.8397422778076~-104.829116673837&lvl=14&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                scrolling="no"
                title="Bing Map"
              ></iframe>
              <Card.Title>
                <a
                  id="largeMapLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bing.com/maps?cp=38.902255277197824~-104.77386474609375&amp;sty=r&amp;lvl=11&amp;FORM=MBEDLD"
                >
                  View Larger Map
                </a>
                &nbsp; | &nbsp;
                <a
                  id="dirMapLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  // href="https://www.bing.com/maps/directions?cp=38.902255277197824~-104.77386474609375&amp;
                  // sty=r&amp;lvl=11&amp;rtp=~pos.38.902255277197824_-104.77386474609375____&amp;FORM=MBEDLD"
                  href="https://www.bing.com/maps?ss=yp.Supply%20Store~sst.1~pg.2&toWww=1&redig=D7B7FDEF2361449183C232DBDEF25645"
                >
                  Get Directions
                </a>
              </Card.Title>
            </Card>
          </Col>
          <Col>
            <Card>
              <p>
                Need to write down supply items? Use our built in grocery list!
              </p>
              <Form>
                <InputGroup>
                  <InputGroup.Text>Grocery List</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    style={{ height: "20%" }}
                    rows="15"
                    cols="40"
                    onChange={handleChange}
                  />
                </InputGroup>
                <Button style={{ marginTop: "20px" }} onClick={handleSubmit}>Save Grocery List</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};
