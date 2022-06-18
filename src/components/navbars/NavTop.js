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
        <Navbar.Brand className="ps-3">
          <Link to="/" style={{ textDecoration: "none" }}>
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
          <Nav.Link href="#beranda">Beranda</Nav.Link>
          <Nav.Link href="#tentangsekolah">Tentang Sekolah</Nav.Link>
          <Nav.Link href="#informasi">Informasi</Nav.Link>
          <Nav.Link href="#fasilitas">Fasilitas Sekolah</Nav.Link>
          <Nav.Link href="#kontak">Kontak</Nav.Link>
        </Nav>

        <div>
          <Button
            variant="primary"
            className="px-5 mx-3"
            onClick={() => setModalLogin(!modalLogin)}
          >
            Login
          </Button>
          {/* <Button
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
