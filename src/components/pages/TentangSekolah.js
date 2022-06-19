import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import guru from "../../assets/img/guru.jpg";
import { Footer } from "../navbars/Footer";
import NavTop from "../navbars/NavTop";
import { FasilitasSekolah } from "./FasilitasSekolah";

export const TentangSekolah = () => {
  return (
    <div>
      <NavTop />
      <div
        className="tentang-sekolah "
        style={{
          backgroundColor: "#007aff",
          borderRadius: "5px",
          marginTop: "150px",
        }}
      >
        <Container fluid>
          <Row>
            <Col md={6}>
              <div style={{ textAlign: "left", color: "white" }}>
                <h1>Visi dan Misi</h1> Unila telah menetapkan tekad untuk
                melanjutkan dharma membangun Unila dan bangsa secara
                bersama-sama. Dengan keteguhan hati, dalam Rencana Pembangunan
                Jangka Panjang (RPJP) Unila 2005-2025 telah ditetapkan visi
                Unila yaitu : <br /> <br />
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                  ” PADA TAHUN 2025 UNILA MENJADI PERGURUAN TINGGI SEPULUH
                  TERBAIK DI INDONESIA.”
                </p>
                <br /> Sejalan dengan misi pembangunan pendidikan nasional serta
                kebijakan Kementerian Pendidikan dan Kebudayaan, Unila telah
                pula menetapkan misi dalam RPJP Unila 2005-2025, yaitu : <br />{" "}
                <br />
                <h4>Misi Universitas Lampung Misi Unila</h4>
                seperti yang tertera di dalam dokumen RPJP 2005 – 2015 dan
                dokumen Renstra 2007 – 2011 sebagai berikut.Butir-butir Misi
                Unila yang telah disempurnakan sebagai berikut: <br />
                <ol>
                  <li>
                    {" "}
                    menyelenggarakan tridarma PT yang berkualitas dan relevan;{" "}
                  </li>
                  <li>
                    menjalankan tata pamong organisasi Unila yang baik (good
                    university governance);
                  </li>
                  <li>
                    {" "}
                    menjamin aksesibilitas dan ekuitas pendidikan tinggi;
                  </li>
                  <li>
                    menjalin kerja sama dengan berbagai pihak di dalam dan luar
                    negeri.{" "}
                  </li>
                </ol>
                <br />
                Untuk mewujudkan keinginan sesuai Visi dan Misi Unila,
                ditetapkanlah Tujuan Universitas Lampung sebagai berikut :{" "}
                <br />
                <h4>Tujuan Universitas Lampung</h4>{" "}
                <ol>
                  <li>
                    menghasilkan lulusan yang bermutu dan berdaya saing tinggi
                    yang cepat diserap pasar tenaga kerja dan mampu menciptakan
                    lapangan kerja bagi dirinya dan orang lain;
                  </li>
                  <li>
                    meningkatkan manajemen organisasi dalam bidang akademik,
                    keuangan, dan sumber daya manusia menuju tata kelola yang
                    baik;
                  </li>
                  <li>
                    meningkatkan aksesibilitas bagi seluruh lapisan masyarakat
                    untuk memperoleh pelayanan pendidikan tinggi di unila;
                  </li>
                  <li>
                    {" "}
                    meningkatkan kerja sama dengan pemerintah pusat, provinsi,
                    kebupaten/kota, dunia usaha, lembaga swadaya masyarakat
                    (LSM), dan pemangku kepentingan lainnya; baik dalam maupun
                    luar negeri.
                  </li>
                </ol>
                Dengan keinginan memberikan manfaat yang berguna bagi kehidupan
                bangsa, seluruh keluarga besar Unila bersatu padu dalam
                mewujudkan visi dan misi Unila ini.
              </div>
            </Col>
            <Col md={6}>
              <img
                src={guru}
                alt=""
                style={{
                  marginLeft: "12px",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
