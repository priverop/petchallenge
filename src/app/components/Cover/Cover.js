import { Row, Col, Container, Button } from 'reactstrap';
import './Cover.scss';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import smoothScrolling from '../../utils/smoothScrolling';

const Cover = () => (
  <Row id="Cover">
    <Container>
      <Row>
        <Col>
          <Pulse>
            <h1 className="mb-3 main-color-text">
              Find your <span className="main-color">perfect</span> partner
              today
            </h1>
          </Pulse>

          <RubberBand delay={1000}>
            <Button
              className="colorful-button"
              size="lg"
              onClick={() => {
                smoothScrolling('PetGallery');
              }}
            >
              Let&apos;s go!
            </Button>
          </RubberBand>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default Cover;
