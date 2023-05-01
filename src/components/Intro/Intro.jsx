import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";
import { useState } from "react";

export default function Intro() {
  const[introImage, setIntroImage] = useState(0);

  const introArray = [
    "SB.png",
    "MR ROBOT.png",
    "ENRON.png",
    "boyish.png",
    "minty.png",
    "Eva.png"
  ];


  if (introImage >= introArray.length) 
    setIntroImage(0);

  return (
    <main>
      <Container fluid className="p-5">
        <Row className="d-flex align-items-center justify-content-center">
          {/* IMAGE */}
          <Col 
            md={{ span: 6, offset: 0 }} 
            lg={{ span: 2, offset: 2 }} 
            xl={{ span: 2, offset: 1 }} 
            className="p-1">
            <Image src={`${process.env.PUBLIC_URL}/images/intro-images/${introArray[introImage]}`}
              alt="Anthony Murphy"
              className="button-effect"
              fluid
              style={{"cursor":"zoom-in"}}
              onClick={() => setIntroImage(introImage+1)} />
          </Col>

          <Col 
            md={{ span: 5, offset: 4 }} 
            lg={{ span: 5, offset: 4 }} 
            // xl={{span : 3, offset: 3 }}
            xl={4}
            className="p-1">
              <h1><span>Hello, my name is</span> Anthony Murphy</h1>
              <p>I'm a software Engineer based in South Florida! I'm a fullstack developer but I especially love frontend work! When I'm not coding, I'm looking at the latest fashion shows and gaming.</p>
              <HashLink to="/#portfolio" style={{"textDecoration":"none"}}><Button 
                size="lg" 
                variant="outline-danger" 
                className="button-style button-effect">See Portfolio</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}