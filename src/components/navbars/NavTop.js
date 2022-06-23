import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function NavTop(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
<<<<<<< HEAD
  let navigate = useNavigate();

  const handleLog = () => {
    navigate("/login/*");
  };
=======
  const navigate = useNavigate();

  // useEffect(() => {
  //   return () => {};
  // }, []);
>>>>>>> bb1df9824ae0eb271802f7496486e222786adc6d

  return (
    <div>
      <Navbar className={props.shadow} bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand className="ps-3">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <img
                src={logo}
                alt="logo"
                width="60px"
                className=" position-absolute1"
              />
              <a
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  padding: "0px  10px",
                  fontFamily: "sans-serif",
                }}
              >
                SD KARYA BANGSA
              </a>
            </Link>
          </Navbar.Brand>

          <Nav>
            <Nav.Link onClick={() => navigate("/")}>Beranda</Nav.Link>
            <Nav.Link onClick={() => navigate("/tentang-sd-karya-bangsa")}>
              Tentang Sekolah
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/fasilitas-sekolah")}>
              Fasilitas Sekolah
            </Nav.Link>
            <NavDropdown title="Informasi" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/registrasi/*")}>
                Pendaftaran
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleLog}>Kontak</Nav.Link>
          </Nav>

          <div>
            <Button variant="primary" className="px-5 mx-3">
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavTop;
