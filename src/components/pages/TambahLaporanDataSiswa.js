import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const TambahLaporanDataSiswa = () => {
  return (
    <div>
      <Container className="mt-5">
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <h3 className="mb-5">Form Pendaftaran Calon Peserta Didik</h3>
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
                    // onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select name="jenis_kelamin">
                    <option selected>Pilih jenis kelamin</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </Form.Select>
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
                    // onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    name="tanggal_lahir"
                    // onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>Agama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="agama"
                    // onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                  required
                >
                  <Form.Label>No Handphone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    name="nomer_hp"
                    // onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label className="mb-2">Alamat</Form.Label>
                <Form.Control
                  className="mb-3"
                  name="alamat"
                  //   onChange={handleChange}
                  as="textarea"
                  rows={3}
                  required
                />

                <Button
                  variant="primary"
                  className="w-100 px-5 "
                  //   onClick={handleSubmit}
                  // onClick={handleSubmit() => navigate("/registrasi")}
                >
                  Daftar
                </Button>
              </Form>
            </Col>
            <Col md={6} className="text-center">
              <img
                // src={logo}
                alt=""
                style={{
                  width: "475px",
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
