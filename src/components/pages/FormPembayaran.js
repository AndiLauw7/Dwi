import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Footer } from "../navbars/Footer";

import NavbarUser from "../navbars/NavbarUser";

export const FormPembayaran = () => {
  return (
    <div>
      <NavbarUser />

      <Container fluid></Container>

      <Container className="mt-5">
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <h3 className="mb-5">Form Pembayaran Calon Peserta Didik</h3>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="nama_lengkap"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="tempat_lahir"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Tanggal Pembayaran</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    name="tanggal_lahir"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Bukti Pembayaran</Form.Label>
                  <Form.Control type="file" placeholder="" name="nomer_hp" />
                </Form.Group>

                <Button variant="primary" className="w-100 px-5 mt-3 ">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6} className="text-center">
              {/* <img
                src={logo}
                alt=""
                style={{
                  width: "475px",
                }}
              /> */}
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
