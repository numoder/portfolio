import { Container, Row, Col } from "../../util/Bootstrap.jsx";

export default function ThreeThings() {

  return (
    <main>
      <Container fluid id="three-things" className="p-5">
        <Row>
          <Col><h2 className="text-center">Three Things 
          <span>That bring pride to my parents.</span></h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col sm={8} lg={3}>
            <p className="icon">🫂</p>
            <h3 className="text-center">Collaborative <span className="d-md-block">Catalyst</span></h3>
            <p className="text-center text-md-start">As a software developer, I am a great team player because I understand the importance of collaboration in achieving our common goals. I actively participate in team discussions, listen to other team members' opinions, and provide constructive feedback to help improve our team's performance! </p>
          </Col>

          <Col sm={8} lg={3}>
            <p className="icon"><a href="https://system-overload-solution.web.app/" 
              target="_blank" 
              rel="noreferrer" 
              class="easter-egg">✍️</a></p>
            <h3 className="text-center">Rocket to<span className="d-md-block">The Moon</span></h3>
            <p className="text-center text-md-start">With 20+ years in tech, I have found that motivating our team to excel is like launching a rocket ship - challenging, but incredibly rewarding!</p>
          </Col>

          <Col sm={8} lg={3}>
            <p className="icon">🥪</p>
            <h3 className="text-center">Functionality <span className="d-md-block">+ Design</span></h3>
            <p className="text-center text-md-start">Combining tech and design is my jam - like PB&J. I strive to create a seamless, irresistible experience for users whilst keeping things toasty and fresh.</p>
          </Col>

        </Row>
      </Container>
    </main>
  )
}