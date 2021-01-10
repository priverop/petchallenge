import { Row, Col, Container, Button } from 'reactstrap';
import './Cover.scss';

const Cover = () => (
  <Row id="Cover">
    <Container>
      <Row>
        <Col>
          <h1 className="mb-3">
            Find your <span className="main-color">perfect</span> partner today
          </h1>
          <Button className="colorful-button" size="lg">
            Let&apos;s go!
          </Button>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default Cover;
