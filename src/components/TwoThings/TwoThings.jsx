import { Container, Row, Col } from "../../util/Bootstrap.jsx";

export default function TwoThings() {

  return (
    <main>
      <Container fluid id="two-things" className="p-5">
        <Row>
          <Col><h2 className="text-center">Two Things that make me different!</h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col sm={12} md={6} lg={4}>
            <p className="icon">🫂</p>
            <h3 className="text-center">Collaborative <span className="d-md-block">Catalyst</span></h3>
            <p className="text-center text-md-start">As a software developer, I am a great team player because I understand the importance of collaboration in achieving our common goals. I actively participate in team discussions, listen to other team members' opinions, and provide constructive feedback to help improve our team's performance! </p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <p className="icon">🖼️</p>
            <h3 className="text-center">Diverse Skill Set<span className="d-md-block">+ Design</span></h3>
            <p className="text-center text-md-start">With my background in software engineering and graphic design, I offer a unique skill set that combines technical expertise with artistic creativity. This allows me to approach UX/UI design from a holistic perspective, considering both the technical feasibility and visual appeal of the interfaces I create.</p>
          </Col>

        </Row>
      </Container>
    </main>
  )
}
