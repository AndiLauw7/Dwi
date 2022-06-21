import React from "react";

import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Murid from "../../assets/img/anakSd.jpg";
import FotoJoin from "../../assets/img/PPDB.jpeg";

export const Pendaftaraan = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      id={id}
      style={{
        backgroundColor: "rgba(140, 140, 140, 5%",
        borderRadius: "5px",
        scrollMarginTop: "100px",
      }}
    >
      <Row>
        <Col md={6}>
          <div style={{ textAlign: "left", color: "white" }}>
            <img
              src={Murid}
              alt=""
              style={{
                height: "500px",
                width: "100%",
              }}
            />
          </div>
        </Col>
        <Col md={6} className="justify-content-center text-center">
          <h3 className="mt-2" style={{ fontFamily: "monospace" }}>
            Informasi PPDB
          </h3>
          <Card className="text-center mt-1">
            <Card.Header>PPDB(Pendaftaran Peserta Didik Baru)</Card.Header>
            <Card.Body>
              <img
                style={{
                  width: "250px",
                  height: "375px",
                }}
                src={FotoJoin}
                alt=""
              />

              {/* <Card.Text></Card.Text> */}
            </Card.Body>
          </Card>
          <Button
            onClick={() => navigate("/form-ppdb")}
            variant="primary"
            className="mt-1 "
          >
            Selengkapnya
          </Button>
        </Col>
      </Row>
    </div>
  );
};
