import React from "react";
import "./header.css";
import { animate } from "motion";

setTimeout(() => {
  animate(".question", { x: [0, 10, 0], y: [-1000, 0] }, { duration: 1.3 });
}, 500);

setTimeout(() => {
  animate(".intro_head", { y: [1000, 10] }, { duration: 1.3 });
}, 500);

function Header() {
  return (
    <div className="container">
      <div className="question"></div>
      <p
        className="question"
        onMouseLeave={() => animate(".question", { scale: 1 })}
        onMouseEnter={() => animate(".question", { scale: 1.1 })}
      >
        Who am I?
      </p>
      <h2 className="intro_head">My name is Emilio Cortés</h2>
    </div>
  );
}

export default Header;
