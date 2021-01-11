import { Row, Col, Alert } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import PetsCarousel from './PetCarousel';
import './Pets.scss';

const Pets = props => (
  <Row className="py-5 text-center" id="PetGallery">
    <Col>
      <div>
        <h2 className="mb-5">
          Are you ready to meet your{' '}
          <span className="main-color">new best friend</span>?
        </h2>
      </div>

      {props.pets.length === 0 && <p>No pets found!</p>}
      <Row>
        {props.pets.length !== 0 && (
          <PetsCarousel pets={Array.from(props.pets)} />
        )}
      </Row>
      <Row className="pt-5">
        <Col>
          <Fade right delay={1000}>
            <div>
              <RubberBand delay={5000} forever>
                <img src="../img/icons/dog1.png" alt="Cute dog" width="100" />
              </RubberBand>
              <Alert color="primary" className="ml-3 d-inline-block">
                Do you need help?
              </Alert>
            </div>
          </Fade>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Pets;
