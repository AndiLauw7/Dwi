import React from "react";
import {
  Breadcrumb,
  Button,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import Navbar from "../navbar";

export default ({ title, url, children }) => {
  const parseUrl = url?.split("/");

  return (
    <>
      <Navbar />

      <Container className="mt-2">
        {url !== undefined ? (
          <Breadcrumb>
            <Breadcrumb.Item>{parseUrl[1]}</Breadcrumb.Item>
            <Breadcrumb.Item active>{parseUrl[2]}</Breadcrumb.Item>
          </Breadcrumb>
        ) : (
          ""
        )}
        <h3 className="fw-bold">{title}</h3>
        {children}
      </Container>
    </>
  );
};
