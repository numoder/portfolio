import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/portfolio.json";

export default function List () {

  return (
    <Container fluid id="portfolio" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">Portfolio <span>Where creativity and code collide.</span></h2>
        </Col>
      </Row>

      <Row className="px-xs-0 px-md-3 px-lg-4 px-xl-5 g-5 justify-content-center">
        {
          data.map( 
            (element) => {
              return element
                ? <Panel 
                    key={element.id}
                    data={element} />
                : <p>Loading</p>
            }).sort().reverse()
        }                
      </Row>
    </Container>
  );
}
