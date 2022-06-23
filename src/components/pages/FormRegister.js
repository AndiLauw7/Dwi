import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Footer } from "../navbars/Footer";
import NavTop from "../navbars/NavTop";
import logo from "../../assets/img/PPDB.jpeg";

export const FormRegister = () => {
  return (
    <div>
      <Container fluid>
        <NavTop />
      </Container>

      <Container className="mt-5">
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <h3 className="mb-5">Form Registrasi Calon Peserta Didik</h3>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Agama</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>No Handphone</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Form.Group>

                <Form.Label className="mb-2">Alamat</Form.Label>
                <Form.Control
                  className="mb-3"
                  as="textarea"
                  rows={3}
                  required
                />

                <Button
                  variant="primary"
                  className="w-100 px-5 "
                  // onClick={() => navigate("/profile/:id")}
                >
                  Daftar
                </Button>
              </Form>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={logo}
                alt=""
                style={{
                  width: "475px",
                  marginTop: "70px",
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
