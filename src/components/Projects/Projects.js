import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Png from "../../Assets/Projects/back_end_rust.png";

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Png}
              isBlog={false}
              title="Back-End Rust"
              description="mini project."
              ghLink="https://github.com/ITTIPOLCHA/Calculate_tax-Group-5/tree/master"
            />
          </Col>
          <Col md={12} className="project-card"></Col>
          <Col md={12} className="project-card"></Col>
        </Row>
      </Container>
    </Container>
  );
}
