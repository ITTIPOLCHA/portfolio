import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a
            href="https://github.com/soumyajit4419"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Model from Soumyajit Behera</h3>
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} IC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ITTIPOLCHA"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
