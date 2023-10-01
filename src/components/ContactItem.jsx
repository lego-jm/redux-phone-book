import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ContactItem() {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/800px-Unknown_person.jpg"
          alt="profile"
        />
      </Col>
      <Col lg={10}>
        <div></div>
        <div></div>
      </Col>
    </Row>
  );
}
