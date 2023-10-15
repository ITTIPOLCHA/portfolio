import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ittipol Charoenphol </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br /> I am a final year student pursuing an EnET Computer (EnET-C)
            at KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (KMUTNB).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleep
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do your best today for a comfortable future!"{" "}
          </p>
          <footer className="blockquote-footer">Ittipol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
