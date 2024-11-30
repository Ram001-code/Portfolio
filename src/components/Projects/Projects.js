import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import ports from "../../Assets/Projects/ports.png";
import fortipass from "../../Assets/Projects/fortipass.png";
import DDOS from "../../Assets/Projects/IoT-Botnet-DDoS.png";
import amtrl from "../../Assets/Projects/AMT-RL.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ports}
              isBlog={false}
              title="Port Scanner"
              description="Simple Port Scanner with a working Backend and also Using Tech stack such as Python, Flask, Nmap and Docker for virtualizatrion of the image container."
              ghLink="https://github.com/Ram001-code/port-scanner"
              demoLink="https://ports.ramksites.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fortipass}
              isBlog={false}
              title="FortiPass"
              description="My personal Password Strength Checker Using Python, HTML, CSS and Flask. It checks the strength of the password and also gives the suggestions to make it more strong."
              ghLink="https://github.com/Ram001-code/FortiPass"
              demoLink="https://fortipass.ramksites.site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DDOS}
              isBlog={false}
              title="IoT Botnet DDoS"
              description="A Simple IoT DDoS Botnet Attack Detection using A RandomForestClassifier and also Working on implementing the same using a real-time data."
              ghLink="https://github.com/Ram001-code/IoT-Botnet-DDoS"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amtrl}
              isBlog={false}
              title="Adaptive Multi Threat Mitigation Using Reinforcement Learning"
              description="A Research Paper on Adaptive Multi Threat Mitigation Using Reinforcement Learning. and also a working on implementing the DDQN model using DEEP RL Techniques."
              ghLink="https://github.com/Ram001-code/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
