import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Nickname is Golf.",
          "Student in KMUTNB.",
          "want to be a Back-End Dev.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}
