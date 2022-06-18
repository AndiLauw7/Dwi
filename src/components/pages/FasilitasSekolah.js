import React from "react";
import { Col, Row } from "react-bootstrap";
import guru from "../../assets/img/guru.jpg";

export const FasilitasSekolah = () => {
  return (
    <div
      className="tentang-sekolah"
      style={{ backgroundColor: "  #ff9c02", borderRadius: "5px" }}
    >
      <Row>
        <Col md={6}>
          <div style={{ justifyContent: "center", color: "white" }}>
            <h1
              className="mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              FASILITAS{" "}
            </h1>{" "}
            <br />
            <p
              className="mb-5"
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Fasilitas yang diberikan oleh <br /> SD Muhammadiyah 1 Krian untuk
              <br /> menunjang kenyamanan proses <br /> belajar siswa – siswi (
              mencari ilmu ).
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="mt-5 me-5 d-flex"
            style={{
              border: "2px solid white",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <ul>
              <li> Gedung Bertingkat</li>
              <li> lapangan Serbaguna</li>
              <li>Lab Komputer</li>
              <li> Lab Bahasa</li>
            </ul>
            <ul>
              <li> Perpustakaan</li>
              <li>SSB ( Sarana Sumber Belajar )</li>
              <li>UKS</li>
              <li>Armada Antar Jemput</li>
              <li>Koperasi Dan Kantin</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
