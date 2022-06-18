import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export const Kontak = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Container fluid>
        <div
          className="text-center mt-5"
          style={{
            backgroundColor: "#5b41db",
            borderRadius: "15px",
            color: "white",
            fontFamily: "monospace",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <p style={{ paddingTop: "25px", fontSize: "35px" }}>
            {" "}
            ALAMAT & KONTAK
          </p>
          <p style={{ paddingBottom: "25px" }}>
            Jalan Ki Hajar Dewantara, Krian,
            <br />
            Katerungan, Katrungan, Sidoarjo, Kabupaten Sidoarjo,
            <br />
            Jawa Timur 61262 <br />
            Telp: (031) 8977007 / (031) 8984657 <br />
            Email: sdmuhammadiyah1krian@yahoo.co.id
          </p>
        </div>
      </Container>
    </div>
  );
};
