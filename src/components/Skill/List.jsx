import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import skillDev from "../../data/skill-dev.json";
import skillCreative from "../../data/skill-creative.json";
import Panel from "./Panel.jsx";

export default function Skill() {
  return (
    <section>
      <Container fluid id="skills" className="p-5">
        <Row>
          <Col className="text-center">
            <h2 className="text-white">
              Particular Set of Skills
              <span>
                <q>Skills I have acquired over a very long career.</q>
              </span>
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <h2 className="text-white">Creative</h2>
            {skillCreative.map((element) => (
              <Panel
              key={element.id}
              name={element.name}
              href={element.link}/>
            ))}
          </Col>

          <Col md={5} className="text-center">
            <h2 className="text-white">Dev</h2>
            {skillDev.map((element) => (
              <Panel
              key={element.id}
              name={element.name}
              href={element.link}/>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
}
