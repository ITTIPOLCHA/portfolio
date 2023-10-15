import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/home.jpg";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🙏
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ITTIPOL CHAROENPHOL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: 10 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
