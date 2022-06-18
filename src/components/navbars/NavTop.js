import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import ModalRegis from "../Modals/ModalRegis";
import ModalLogin from "../Modals/ModalLogin";
import { Link } from "react-router-dom";

function NavTop(props) {
  const [modalRegis, setModalRegis] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  useEffect(() => {
    return () => {
      setModalLogin(false);
      setModalRegis(false);
    };
  }, []);

  return (
    <Navbar className={props.shadow} bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              width="65px"
              className=" position-absolute1"
            />
            <a style={{ fontSize: "15px", paddingRight: "20px" }}>
              SD KARYA BANGSA
            </a>
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="#home">Beranda</Nav.Link>
          <Nav.Link href="#features">Tentang Sekolah</Nav.Link>
          <Nav.Link href="#pricing">Informasi</Nav.Link>
          <Nav.Link href="#pricing">Fasilitas Sekolah</Nav.Link>
          <Nav.Link href="#pricing">Kontak</Nav.Link>
        </Nav>
        <div>
          {/* <Button
            variant="primary"
            className="px-5 mx-3"
            onClick={() => setModalLogin(!modalLogin)}
          >
            Login
          </Button>
          <Button
            variant="primary"
            className="px-5"
            onClick={() => setModalRegis(!modalRegis)}
          >
            Register
          </Button> */}
        </div>
      </Container>
      {modalRegis ? (
        <ModalRegis
          show={modalRegis}
          onHide={() => setModalRegis(!modalRegis)}
        />
      ) : (
        ""
      )}
      {modalLogin ? (
        <ModalLogin
          show={modalLogin}
          onHide={() => setModalLogin(!modalLogin)}
          handleModalRegis={(value) => setModalRegis(value)}
        />
      ) : (
        ""
      )}
    </Navbar>
  );
}

export default NavTop;
