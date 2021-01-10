import { Row, Col, Container, Button } from 'reactstrap';
import './Cover.scss';

const Cover = () => (
  <Row id="Cover">
    <Container>
      <Row>
        <Col>
          <h1>Find your perfect partner today</h1>
          <Button className="colorful-button" size="lg">
            Let&apos;s go!
          </Button>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default Cover;
