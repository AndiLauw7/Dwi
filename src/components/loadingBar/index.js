import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

export default () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        width: "100wh",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
