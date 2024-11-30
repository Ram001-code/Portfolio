import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudio, SiVscodium } from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiShell,
  SiVsco,
} from "react-icons/si";
// import BurpsuiteIcon from "./BurpSuiteIcon";
import { SiWindowsterminal } from "react-icons/si";
import { SiPowershell } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      {/* <BurpsuiteIcon style={{ width: "2rem", height: "2rem" }} /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Toolstack;
