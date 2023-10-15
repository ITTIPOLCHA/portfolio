import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              - I got to know about programming while studying in vocational
              school. It made me realize that I enjoy brainstorming and finding
              solutions to problems.
              <br />
              <br />- I have studied classic literature before
              <i>
                <b className="green">
                  {" "}
                  Python, C, Java, Javascript, HTML and CSS.{" "}
                </b>
              </i>
              <br />
              <br />- My field of Interest's are building new &nbsp;
              <i>
                <b className="green">Web Technologies and Products </b>
              </i>
              <br />
              <br />- Whenever possible, I still use my enthusiasm to develop
              products with <b className="green">Node.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ITTIPOLCHA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
