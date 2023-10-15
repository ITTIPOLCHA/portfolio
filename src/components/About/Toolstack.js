import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows10,
  SiVisualstudiocode,
  SiPostman,
  SiLinux,
} from "react-icons/si";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows10 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    </Row>
  );
}
