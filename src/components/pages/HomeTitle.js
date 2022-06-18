import React from "react";
import NavTop from "../navbars/NavTop";
import { Col, Container } from "react-bootstrap";
import hero from "../../assets/img/sd.jpeg";

function HomeTitle() {
  return (
    <>
      <div
        className="title-landing align-items-center text-white w-100 "
        style={{
          height: "450px",

          backgroundImage: `url(${hero})`,
          backgroundPosition: "top",
          objectFit: "cover",
          filter: "brightness(0.7)",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <NavTop />
      <Container>
        <div
          className="h1 mb-3 mt-5 fw-bold text-white"
          style={{
            fontSize: "30px",
            paddingTop: "300px",
          }}
        >
          <p>Selamat Datang DiWebsite SD Karya Bangsa </p>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "100px",
              color: "white",
            }}
          >
            Generasi Mandiri Untuk Membangun Negeri
          </p>
        </div>
        {/* <Col lg={6}>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "100px",
              color: "white",
            }}
          >
            Generasi Mandiri Untuk Membangun Negeri
          </p>
        </Col> */}
      </Container>
    </>
  );
}

export default HomeTitle;
