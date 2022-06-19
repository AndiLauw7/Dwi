import React from "react";
import { Container, Form } from "react-bootstrap";
import { Footer } from "../navbars/Footer";
import NavTop from "../navbars/NavTop";

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
          <Form>
            <Form.Group
              className="mb-3 "
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              required
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              required
            >
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple required />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Laki-Laki</option>
                  <option>Perempuan</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Laki-Laki</option>
                  <option>Perempuan</option>
                </Form.Select>
              </Form.Group>
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
