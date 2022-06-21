import React, { useEffect, useState } from "react";
import { Navbar, Container, Button, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import ModalRegis from "../Modals/ModalRegis";
import ModalLogin from "../Modals/ModalLogin";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function NavTop(props) {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const navigate = useNavigate();
  const [modalRegis, setModalRegis] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  useEffect(() => {
    return () => {
      setModalLogin(false);
      setModalRegis(false);
    };
  }, []);

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
            <Nav.Link
              href="#tentang-sekolah"
              offset={-100}
              duration={500}
              spy={true}
              smooth={true}
            >
              Tentang Sekolah
            </Nav.Link>
            <Nav.Link href="#fasilitas">Fasilitas Sekolah</Nav.Link>
            <NavDropdown title="Informasi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#ppdb">Pendaftaran</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#kontak">Kontak</Nav.Link>
          </Nav>

          <div>
            <Button
              variant="primary"
              className="px-5 mx-3"
              onClick={() => navigate("/login")}
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
    </div>
  );
}

export default NavTop;
