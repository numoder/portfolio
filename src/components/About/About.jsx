import { Container, Row, Col, Image } from "../../util/Bootstrap.jsx";
import GlowOnHover from "../Elements/GlowOnHover.jsx";

export default function About() {
  return (
    <Container fluid id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">About <span>a new tech </span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={4} xl={3}>
          <Image src={`${process.env.PUBLIC_URL}/img/Anthony.jpg`}
            fluid
            alt="Anthony Murphy"            
            className="button-effect border-style mb-4"
            style={{"cursor":"zoom-in"}}/>
        </Col>

        <Col lg={8} zclassName="text-white">
          <p>p1</p>
          <p>p2</p>
          <p>p3</p>
        </Col>
      </Row>

      <Row>        
        <Col className="text-center">
          <a href="https://www.linkedin.com/in/anthonymurphy-04/"
          target="_blank"
          rel="noreferrer">
            <GlowOnHover text={"Connect on Linkedin"} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
