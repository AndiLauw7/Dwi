import React from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap'
import LOGO from "../../assets/img/logo.png"

export default function Login() {
  return (
    <>
      <Container fluid>

        <Row style={{ height: "100vh" }} >
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <img src={LOGO} width={300} />
            <div className='my-5 text-center'>
              <h2 className='fw-bold'>Welcome To Dashboard</h2>
              <h3 className='fw-bold'>SD Karya Bangsa</h3>
            </div>
          </Col>
          <Col md={6} style={{ backgroundColor: "rgba(6,147,227,1)" }} className="d-flex flex-column justify-content-center align-items-center">
            <Card style={{width: "25rem"}}>
              <Card.Body className='p-5'>
                <h2 className="mb-5 text-center fw-bold text-primary" >Login</h2>
                {/* {message && message} */}

                <Form>
                  <Form.Group controlId="inputEmail">
                    <Form.Label className="fw-bold text-primary">Email</Form.Label>
                    <Form.Control
                      className=" p-2 mb-4 "
                      type="email"
                      name="email"
                      // onChange={handleChange}
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group controlId="inputPassword">
                    <Form.Label className="fw-bold text-primary">Password</Form.Label>

                    <Form.Control
                      className="  p-2 mb-4"
                      type="password"
                      name="password"
                      // onChange={handleChange}
                      aria-describedby="passwordHelpBlock"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Button
                    className=" w-100 fw-bold my-3 "
                    variant="primary"
                    // onClick={handleLogin}
                  >
                   Login
                  </Button>
                </Form>

                <p className="text-center text-muted">
                  Forget Password ? Click
                  <a
                    // onClick={() => handleRegis(true)}
                    className="fw-bold text-primary ms-1"
                    style={{ cursor: "pointer" }}
                  >
                    Here
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
