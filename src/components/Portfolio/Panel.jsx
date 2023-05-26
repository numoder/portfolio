import { Col, Card, Row } from "react-bootstrap";

export default function Panel({ data: { id, name, about, website, cover } }) {
  return (
  <Card className="portfolio-card">
      <Col key={id} md={12} lg={6} xl={4}>

          <Card.Img src={`${process.env.PUBLIC_URL}/ports/${cover}`}/>
      <div className="content">
        <h3>{name}</h3>
        <p>{about}</p>
        </div>

    </Col>
  </Card>
  );
}
