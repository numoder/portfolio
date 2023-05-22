import { Col, Card } from "react-bootstrap";

export default function Panel ({ data:{id, name, about, website, cover} }) {

  // const handleSiteLaunch = websiteUrl => {
  //   console.log(websiteUrl);
  //   window.open(websiteUrl, "_blank");
  // }
  
  return (
    <Col key={id} md={12} lg={6} xl={4}>
      <Card className="portfolio-card glow-on-hover button-effect">
      <div className="col-4">
          <a
            href={website} 
            target="_blank"
            rel="noreferrer">
              <Card.Img
                src={`${process.env.PUBLIC_URL}/ports/${cover}`} /></a>
      </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>

    <div class="col-6">.col-6 <br/> Subsequent columns continue along the new line.</div>
        </div>
      </Card>
    </Col>
  )
}