import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/AnthonyM04/portfolio";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" className="p-5">
        <Row>
          <Col>
          <p className="text-center text-secondary">
            <a href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button-effect">
            <Github size="40" color="grey" />
            <br /><small>Code in GitHub</small>
            </a>
            <small>&copy; {currentYear}</small></p>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}