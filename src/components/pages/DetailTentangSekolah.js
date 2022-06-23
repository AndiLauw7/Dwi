import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { dataPost } from "../../dummyData/DataTentangSekolah";
import { DataTentang } from "../../dummyData/DetailTentangSekolah";
import NavTop from "../navbars/NavTop";
import logo from "../../assets/img/sd.jpeg";

export const DetailTentangSekolah = () => {
  return (
    <div>
      <NavTop />
      <Container fluid>
        <div
          className="tentangSekolah"
          style={{
            marginTop: "100px",
          }}
        >
          <Row>
            <Col md={6}>
              <div className="text-center">
                <img src={logo} alt="" style={{ width: "450px" }} />
              </div>
              {DataTentang.map((DataTentang) => {
                return (
                  <div className="text-start mt-3">
                    <h3>Latar Belakang Sd Karya Bangsa</h3>
                    <p>{DataTentang.latarBelakang} </p>
                  </div>
                );
              })}
              {dataPost.map((dataPost) => {
                return (
                  <div style={{ textAlign: "left" }}>
                    <h1>Visi dan Misi</h1>
                    <h3>Visi Sd Karya Bangsa</h3>
                    <p>{dataPost.visi}</p>
                    <h3>Misi Sd Karya Bangsa</h3>
                    <ol>
                      <li>{dataPost.misi1}</li>
                      <li>{dataPost.misi2}</li>
                      <li>{dataPost.misi3}</li>
                      <li>{dataPost.misi4}</li>
                      <li>{dataPost.misi5}</li>
                    </ol>
                  </div>
                );
              })}
            </Col>
            <Col md={6}>b</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
