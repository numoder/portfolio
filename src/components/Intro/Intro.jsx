import { Container, Row, Col, Image, Button } from "../../util/Bootstrap.jsx";
import GlowOnHover from "../Elements/GlowOnHover.jsx";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export default function Intro() {
  const[introImage, setIntroImage] = useState(0);

  const introArray = [
    "SB.png",
    "MR ROBOT.png",
    "ENRON.png",
    "boyish.png",
    "Unown.png",
    "Eva.png",
    "Cyber.png",
    "Favicon.png"
  ];

  if (introImage >= introArray.length) 
    setIntroImage(0);

  return (
    <main>
      <Container fluid className="p-5">
        <Row className="d-flex align-items-center justify-content-center">
          {/* IMAGE */}
          <Col 
            md={{ span: 5, offset: 0 }} 
            lg={{ span: 3, offset: 2 }} 
            xl={{ span: 3, offset: 1 }} 
            className="p-1">
            <Image src={`${process.env.PUBLIC_URL}/img/icons/${introArray[introImage]}`}
              alt="Anthony Murphy"
              className="easter-egg"
              fluid
              onClick={() => setIntroImage(introImage+1)} />
          </Col>

          <Col 
            md={{ span: 6, offset: 1 }} 
            lg={{ span: 5, offset: 1 }} 
            xl={{ span: 4, offset: 3 }}
            className="p-3">
              <h1 className="headers"><span>Hello, my name is</span> Anthony Murphy</h1>
              <p>I'm a software Engineer based in South Florida! I'm a fullstack developer but I especially love frontend work! When I'm not coding, I'm looking at the latest fashion shows and gaming.</p>
              <HashLink to="/#portfolio" style={{"textDecoration":"none"}}><GlowOnHover 
              text='See Portfolio'></GlowOnHover></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
