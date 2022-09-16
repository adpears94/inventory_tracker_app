import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import '../App.css'

export function Footer() {
  return (
    <MDBFooter
      bgColor="primary"
      className="text-center text-white position-sticky fixed-bottom mt-5"
    >
      <MDBContainer className="p-3 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/GalvanizeHQ/"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/galvanize?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.galvanize.com/"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/galvanizehq/?hl=en"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/school/galvanize-it/"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            // floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/gSchool"
            role="button"
            target="_blank"
            rel="noopener"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgb(26, 36, 92)" }}
      >
        <span>©Galvanize 2022:&nbsp;</span>
        <a className="text-white" href="/">
          Inventory Tracker
        </a>
      </div>
    </MDBFooter>
  );
}