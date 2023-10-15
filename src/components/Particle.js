import React from "react";
import Particles from "react-tsparticles";

export default function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "char",
            stroke: {
              width: 1,
              color: "#00FF00",
            },
            character: {
              value: [
                "10110",
                "1011010111101000000",
                "100111001111111001111111101010",
              ],
              font: "Verdana",
              style: "normal",
            },
          },
          size: {
            value: 10,
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 10,
            random: true,
            straight: true,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
          },
        },
      }}
    />
  );
}
