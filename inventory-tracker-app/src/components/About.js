import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";

const AboutDiv = styled.div`
  background-color: white;
`;
const Banner = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-family: "Roboto-Flex";
`;
const MissionDiv = styled.div`
  text-align: center;
  padding: 30px;
  font-family: "Roboto-Flex";
  border: 1px solid black;
  background-color: gray;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const DeveloperDiv = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`;
const CardContainer = styled.div`
  display: flex;
  padding: 30px;
  font-family: "Roboto-Flex";
  justify-content: center;
  justify-content: space-around;
`;

const LinksContainer = styled.div`
  text-align: center;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const About = () => {
  return (
    <AboutDiv>
      <MissionDiv className="mission">
        <Banner>Our Vision</Banner>
        <p style={{ fontSize: "20px", fontFamily: "Roboto-Flex" }}>
          To create a virtual museum for the masses. Being able to view and
          appreciate classical works of art can require a lot of travel and be a
          very costly and prohibitive activity. During the COVID pandemic, these
          restrictions were amplified by global lockdowns and travel
          restrictions. Providing a virtual museum will allow global access in
          an easy-to-use, cost-effective way even in the face of a global
          pandemic.
        </p>
        <Banner>Our Mission</Banner>
        <p style={{ fontSize: "20px", fontFamily: "Roboto-Flex" }}>
          To provide access to more than 490,000 works—from around the world and
          throughout history.
        </p>
      </MissionDiv>

      <Container>
        <DeveloperDiv className="developers">
          <Banner>Developers</Banner>
          <CardContainer>
            <Card style={{ width: "15rem", height: "15rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="/images/wolf.jpg"
                  alt="miguel"
                  style={{ width: "120px" }}
                />
                <Card.Title>Miguel Castro</Card.Title>
                <Button variant="primary" href="https://github.com/jangoflyte">
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
                  style={{ width: "120px" }}
                />
                <Card.Title>Avery Pears</Card.Title>
                <Button variant="primary" href="https://github.com/adpears94">
                  Github
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "15rem", height: "15rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  // src="/Assets/mark.png"
                  src="https://ca.slack-edge.com/T1T555TL0-U03QHUCG68L-f4e87d604843-512"
                  alt="mark"
                  style={{ width: "120px" }}
                />
                <Card.Title>Mark Scarna</Card.Title>
                <Button variant="primary" href="https://github.com/markscarna">
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
                  style={{ width: "120px" }}
                />
                <Card.Title>Nicholas Sexton</Card.Title>
                <Button
                  variant="primary"
                  href="https://github.com/nicksexton13"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </CardContainer>
        </DeveloperDiv>

        <LinksContainer className="links">
          <Banner>Project Planning</Banner>
          <CDBBox display="flex" justifyContent="around" alignContent="center">
            <CDBBtn
              href="https://github.com/jangoflyte/Project-3"
              style={{ textDecoration: "none" }}
              circle
              outline
            >
              <CDBIcon fab icon="github" />
              Github
            </CDBBtn>
            <CDBBtn
              href="https://www.figma.com/file/1HjLFW5m19RylK1Kx0hKf9/Untitled?node-id=0%3A1"
              style={{ textDecoration: "none" }}
              circle
              outline
            >
              {/* <CDBIcon fab icon="magic" /> */}
              Figma
            </CDBBtn>
            <CDBBtn
              href="https://docs.google.com/document/d/1hlCnAcFzcLfWCOGo9BSLi8VJD8x6sclpCxnRINSJyDo/edit"
              style={{ textDecoration: "none" }}
              circle
              outline
            >
              <CDBIcon fab icon="google" />
              Google Docs
            </CDBBtn>
            <CDBBtn
              href="https://trello.com/b/CZnbSZrL/project-3 "
              style={{ textDecoration: "none" }}
              circle
              outline
            >
              {/* <CDBIcon fab icon="users" /> */}
              Trello
            </CDBBtn>
          </CDBBox>
        </LinksContainer>
      </Container>
    </AboutDiv>
  );
};
