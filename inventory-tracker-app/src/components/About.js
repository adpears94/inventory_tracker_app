import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import { useContext } from "react";
import { DarkThemeContext } from "./DarkThemeContext";

export const About = () => {
  const { darkMode } = useContext(DarkThemeContext);
  const AboutDiv = styled.div`
    /* height: 100vh; */
    /* margin-bottom: 5%; */
    background-color: ${darkMode};
  `;
  const Banner = styled.h1`
    /* text-align: center; */
    margin-bottom: 30px;
    font-family: "Roboto-Flex";
  `;
  const MissionDiv = styled.div`
    text-align: center;
    padding: 30px;
    font-family: "Roboto-Flex";
    border: 1px solid black;
    /* background-color: gray; */
    border-radius: 10px;
    // margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 3%;
  `;
  const DeveloperDiv = styled.div`
    text-align: center;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-around;
  `;
  // const CardContainer = styled.div`
  //   display: flex;
  //   padding: 30px;
  //   font-family: "Roboto-Flex";
  //   justify-content: center;
  //   justify-content: space-around;
  // `;

  // const LinksContainer = styled.div`
  //   text-align: center;
  //   padding: 30px;
  //   display: flex;
  //   flex-wrap: wrap;
  // `;
  return (
    <AboutDiv>
      <MissionDiv className="mission">
        <Banner>Our Vision</Banner>
        <p style={{ fontSize: "20px", fontFamily: "Roboto-Flex" }}>
          As a unit supply manager, I need a system that can orderly track all
          items of inventory that are assigned to the base/squadron. This system
          needs to track all users who check out inventory as well as track the
          date it was assigned, with the ability to put a date of return.
        </p>
        <Banner>Our Mission</Banner>
        <p style={{ fontSize: "20px", fontFamily: "Roboto-Flex" }}>
          To provide access to a centralized enpoint that manages your unit's
          assets.
        </p>
      </MissionDiv>

      <DeveloperDiv>
        <Container fluid>
          <Row>
            <Col>
              <Banner>Developers</Banner>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifyContent: "space-around",
                  padding: "3%",
                }}
              >
                <Card style={{ width: "15rem", height: "15rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="/images/wolf.jpg"
                      alt="miguel"
                      style={{ width: "60%" }}
                    />
                    <Card.Title>Miguel Castro</Card.Title>
                    <Button
                      variant="primary"
                      href="https://github.com/jangoflyte"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "15rem", height: "15rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="https://ca.slack-edge.com/T1T555TL0-U03PYLN7FAP-a2b497064292-512"
                      alt="avery"
                      style={{ width: "60%" }}
                    />
                    <Card.Title>Avery Pears</Card.Title>
                    <Button
                      variant="primary"
                      href="https://github.com/adpears94"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Button>
                  </Card.Body>
                </Card>
              </Row>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  justifyContent: "space-around",
                  padding: "3%",
                }}
              >
                <Card style={{ width: "15rem", height: "15rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      // src="/Assets/mark.png"
                      src="https://ca.slack-edge.com/T1T555TL0-U03QHUCG68L-f4e87d604843-512"
                      alt="mark"
                      style={{ width: "60%" }}
                    />
                    <Card.Title>Mark Scarna</Card.Title>
                    <Button
                      variant="primary"
                      href="https://github.com/markscarna"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "15rem", height: "15rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="/images/nick.png"
                      alt="nick"
                      style={{ width: "60%" }}
                    />
                    <Card.Title>Nicholas Sexton</Card.Title>
                    <Button
                      variant="primary"
                      href="https://github.com/nicksexton13"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Button>
                  </Card.Body>
                </Card>
              </Row>
            </Col>

            <Col>
              <Banner>Project Planning</Banner>

              <CDBBox
                display="flex"
                justifyContent="around"
                alignContent="center"
              >
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <CDBBtn
                    href="https://github.com/jangoflyte/Project-3"
                    style={{ textDecoration: "none", margin: "10%" }}
                    circle
                    outline
                    target="_blank"
                    rel="noopener"
                  >
                    <CDBIcon fab icon="github" />
                    Github
                  </CDBBtn>
                  <CDBBtn
                    href="https://www.figma.com/file/1HjLFW5m19RylK1Kx0hKf9/Untitled?node-id=0%3A1"
                    style={{ textDecoration: "none", margin: "10%" }}
                    circle
                    outline
                    target="_blank"
                    rel="noopener"
                  >
                    {/* <CDBIcon fab icon="magic" /> */}
                    Figma
                  </CDBBtn>
                </Row>

                <Row>
                  <CDBBtn
                    href="https://docs.google.com/document/d/1hlCnAcFzcLfWCOGo9BSLi8VJD8x6sclpCxnRINSJyDo/edit"
                    style={{ textDecoration: "none", margin: "10%" }}
                    circle
                    outline
                    target="_blank"
                    rel="noopener"
                  >
                    <CDBIcon fab icon="google" />
                    Google Docs
                  </CDBBtn>
                  <CDBBtn
                    href="https://trello.com/b/CZnbSZrL/project-3 "
                    style={{ textDecoration: "none", margin: "10%" }}
                    circle
                    outline
                    target="_blank"
                    rel="noopener"
                  >
                    {/* <CDBIcon fab icon="users" /> */}
                    Trello
                  </CDBBtn>
                </Row>
              </CDBBox>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQf3RPhgZwDtiL5w1y1Wp6wbm4l8WD-jI5mwbWshhsY1PsV0XLr3LDnn1UUdRmO80Q7Q3iJ7h9r6VRF/embed?start=false&loop=false&delayms=3000"
                frameborder="0"
                width="90%"
                height="60%"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                title="powerpoint"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </DeveloperDiv>
    </AboutDiv>
  );
};
