import React from "react";
import NavTop from "../navbars/NavTop";
import { Col, Container } from "react-bootstrap";
import hero from "../../assets/img/sd.jpeg";
import { TentangSekolah } from "./TentangSekolah";
import { FasilitasSekolah } from "./FasilitasSekolah";
import { Pendaftaraan } from "./Pendaftaraan";
import "../../assets/css/Style.css";
import { Footer } from "../navbars/Footer";

function HomeTitle() {
  return (
    <div>
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
      </Container>
      <Container id="tentang-sekolah">
        <TentangSekolah  />
      </Container>
      <Container className="mt-5" id="fasilitas">
        <FasilitasSekolah />
      </Container>
      <Container fluid className="mt-5" id="ppdb">
        <Pendaftaraan />
      </Container>
      <Container fluid className="mb-0" id="kontak">
        <Footer />
      </Container>
    </div>
  );
}

export default HomeTitle;
