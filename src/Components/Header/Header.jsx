import React from "react";
import "./header.css";
import { animate, timeline, spring } from "motion";
import { useEffect } from "react";

const sequence = [
  [
    ".question",
    { x: [0, 10, 0], y: [-1000, 8] },
    { duration: 1.3 },
    { easing: "ease-in" },
  ],
  "question",
  [".intro_head", { y: [1000, 10] }, { duration: 1.3 }, { at: "quesiton" }],
];

function Header() {
  useEffect(() => {
    timeline(sequence, { delay: 0.5 });
  });

  return (
    <div className="container">
      <br></br>

      <div className="question">
        <p
          className="question"
          onMouseLeave={() => animate(".question", { scale: 1 })}
          onMouseEnter={() => animate(".question", { scale: 1.1 })}
        >
          Who am I?
        </p>
      </div>

      <h2 className="intro_head">My name is Emilio Cortés</h2>

      <div className="description">
        <br />
        <h4>
          I'm a 23 year old software engineer currently located in México.
        </h4>
        <p> Data. Creative Code. Python. JavaScript. </p>
      </div>
    </div>
  );
}

export default Header;
