import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <div
      className="text-center mt-5 footer"
      style={{
        color: "white",

        fontFamily: "monospace",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(6,147,227,1)",
          color: "white",
          fontFamily: "monospace",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <p
          style={{
            paddingTop: "25px",
            fontSize: "35px",
          }}
        >
          <img src={logo} width="100px" alt="" />
        </p>
        <p style={{ paddingBottom: "50px" }}>
          Jalan Ki Hajar Dewantara, Krian,
          <br />
          Katerungan, Katrungan, Sidoarjo, Kabupaten Sidoarjo,
          <br />
          Jawa Timur 61262 <br />
          Telp: (031) 8977007 / (031) 8984657 <br />
          Email: sdmuhammadiyah1krian@yahoo.co.id
        </p>
      </div>
    </div>
  );
};
