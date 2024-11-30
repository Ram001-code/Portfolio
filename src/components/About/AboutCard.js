import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ram Kansal </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently a Student at MITWPU looking for a Cyber Secuirty Based Internship.
            <br />
            I have currently persuing my Bachelors in Technology.
            <br />
            <br />
            Here are Some of my Expertise
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Penetration Testing
            </li>
            <li className="about-activity">
              <ImPointRight /> Red Teaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Application Security
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
