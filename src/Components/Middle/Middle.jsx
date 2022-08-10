import React from "react";
import "./Middle.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { animate } from "motion";
import { useEffect } from "react";

function Middle() {
  useEffect(() => {
    animate(".logo_centro", { scale: 1, x: 2, scale: 0.5 }, { duration: 2 });
  });

  return (
    <div className="container">
      <div className="middle_header">
        <Image
          onClick={() => {
            window.open("https://www3.centro.edu.mx/");
          }}
          onMouseEnter={() => {
            animate(".logo_centro", { scale: 0.6 });
          }}
          onMouseLeave={() => {
            animate(".logo_centro", { scale: 0.4 });
          }}
          fluid="True"
          className="logo_centro"
          src="logo_centro.png"
        ></Image>

        <div className="ms-auto">
          <Card
            className="ms-auto"
            id="professor_card"
            bg="dark"
            border="light"
            text="light"
            style={{ width: "18rem" }}
            onMouseEnter={() => {
              animate("#professor_card", { scale: 0.8 }, { delay: 0.2 });
            }}
            onMouseLeave={() => {
              animate("#professor_card", { scale: 1 });
            }}
          >
            <Card.Body>
              <Card.Title>
                <h2 className="professor_header"> Professor at Centro. </h2>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Data Science with Python
              </Card.Subtitle>
              <Card.Text>
                I've been teaching STEAM related subjects at CENTRO. since April
                2021. Mainly focused on teaching Python and its uses related to
                Data Science. My class focuses primarily on:
              </Card.Text>
              <ul>
                <li>Data Visualization</li>
                <li>Data processing</li>
                <li>Machine learning models</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Middle;
