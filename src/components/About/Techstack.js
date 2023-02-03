import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  DiAws,
  DiDocker,
  DiBitbucket,
  DiGithub,
  DiNginx,
    DiPython,
    DiJava,



} from "react-icons/di";
import {
    SiMicrosoftazure,
    SiGooglecloud,
    SiJenkins,
    SiRedhat,
    SiRedhatopenshift,
    SiKubernetes,
    SiTerraform,
    SiAnsible,

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRedhat />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJenkins />
        </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiKubernetes />
          </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRedhatopenshift />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiBitbucket />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNginx />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTerraform />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAnsible />
        </Col>

    </Row>
  );
}

export default Techstack;
