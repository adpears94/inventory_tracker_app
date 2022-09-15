import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const Resources = () => {
    return (
      <Container>
        <Card>
          <Card.Body>
            <p>
              Need some tips on tracking inventory? Checkout these useful
              resources.
            </p>
            <Card.Img src=''/>
          </Card.Body>
        </Card>
        <Card>
          <p>Need supplies? Visit nearest supply store.</p>
        </Card>
      </Container>
    );
}