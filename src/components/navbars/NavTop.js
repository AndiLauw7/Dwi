import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function NavTop(props) {
  
  const navigate = useNavigate();


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
<<<<<<< HEAD
            <Nav.Link>Kontak</Nav.Link>
=======
            <Nav.Link >Kontak</Nav.Link>
>>>>>>> 44327d7fe3d92d36bb268cf93cd6f44d3c3bcb50
          </Nav>

          <div>
            <Button onClick={() => navigate("/login")} variant="primary" className="px-5 mx-3">
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavTop;
