import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import { Footer } from "../navbars/Footer";

import NavbarUser from "../navbars/NavbarUser";
import NavTop from "../navbars/NavTop";

export const FormPembayaran = () => {
  const [state, dispatch] = useContext(UserContext);
  return (
    <div>
      {state.islogin ? <NavTop /> : <NavbarUser />}
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
