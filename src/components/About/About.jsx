import { Container, Row, Col, Image } from "../../util/Bootstrap.jsx";

export default function About() {

  return (
    <Container id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">About <span>A Contrarian's Perspective on Life.</span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={5} lg={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/Anthony.jpg`}
            alt="Anthony Murphy"            
            className="button-effect border-style"
            // style={{"cursor":"waiting"}}
            fluid/>
        </Col>

        <Col md={8} lg={6}  className="text-white">
        <p>h</p>
        </Col>
      </Row>
    </Container>
  );
}
