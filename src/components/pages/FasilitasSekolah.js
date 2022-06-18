import React, { useRef, useState, useEffect } from "react";

import { posts } from "../../DataFasilitas";
import { motion } from "framer-motion";
import { MdOutlineStarPurple500 } from "react-icons/md";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export const FasilitasSekolah = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div
      className="tentang-sekolah"
      style={{ backgroundColor: "  #5b41db", borderRadius: "5px" }}
    >
      <Row>
        <Col md={6}>
          <div style={{ justifyContent: "center", color: "white" }}>
            <h1
              className="mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              FASILITAS{" "}
            </h1>{" "}
            <br />
            <p
              className="mb-5"
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Fasilitas yang diberikan oleh <br /> SD Muhammadiyah 1 Krian untuk
              <br /> menunjang kenyamanan proses <br /> belajar siswa – siswi (
              mencari ilmu ).
            </p>
          </div>
        </Col>
        <Col md={6}>
          <p
            className="title text-start text-white mb-3 "
            style={{
              fontWeight: "bolder",
              fontSize: "21px",
              padding: "0",
              margin: "0",
            }}
          >
            NEWCOMERS
          </p>
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {posts.map((post) => {
                return (
                  <motion.div
                    className="item"
                    key={post}
                    // onClick={handleDetail}
                  >
                    <img src={post.image} alt="" />
                    <p className="text-start mt-1 text-white fw-bold fs-15 mb-1">
                      {post.title}
                    </p>

                    {/* <p className="start-first ">
                      <img src={star} alt="" />
                      <span className="rating1">{post.rating}</span>
                    </p> */}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
