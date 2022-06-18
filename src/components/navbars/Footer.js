import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <div
      className="text-center mt-5 footer"
      style={{
        color: "white",
        backgroundColor: "rgba(6,147,227,1)",
        fontFamily: "monospace",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "20px",
          fontWeight: "lighter",
        }}
      >
        <p
          style={{
            paddingTop: "5px",
            fontSize: "10px",
          }}
        >
          <img src={logo} width="100px" alt="" />
        </p>
        <p
          style={{ paddingBottom: "5px", marginBottom: "0", fontSize: "15px" }}
        >
          Jalan Ki Hajar Dewantara, Krian,
          <br />
          Katerungan, Katrungan, Sidoarjo, Kabupaten Sidoarjo,
          <br />
          Jawa Timur 61262 <br />
          Telp: (031) 8977007 / (031) 8984657 <br />
          Email: sdmuhammadiyah1krian@yahoo.co.id
        </p>
        <p
          style={{
            color: "white",
            backgroundColor: "#066",
            fontFamily: "monospace",
            fontSize: "15px",
            margin: "0",
          }}
        >
          &copy;SD Karya Bangsa 2022
        </p>
      </div>
    </div>
  );
};
