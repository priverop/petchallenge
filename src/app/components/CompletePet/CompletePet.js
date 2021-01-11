import { Button, Col, Row } from 'reactstrap';
import './CompletePet.scss';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

const PetImage = props => (
  <Bounce delay={500}>
    <img
      className="full-pet-image img-fluid"
      src="../img/pets/dog1.jpg"
      alt={props.name}
    />
  </Bounce>
);

const PetData = props => (
  <Row>
    <Col>
      <div>
        <Button
          className="float-right"
          onClick={() => {
            props.handleLike();
          }}
        >
          Like! ({props.likes})
        </Button>
        <h1 className="main-color">{props.pet.name}</h1>
      </div>
      <h3>Hey! This is a dog!</h3>
      <div>
        <small>
          Added: {new Date(props.pet.created_at).toLocaleDateString('en-gb')}
        </small>
      </div>
    </Col>
  </Row>
);

const PetAdopt = () => (
  <Row>
    <Col className="pt-5 text-center">
      <h2 className="main-color">Are you in love already?</h2>
      <div className="my-3">
        <img src="../img/icons/dog1.png" alt="Cute dog" width="150" />
      </div>

      <Button>Adopt me</Button>
    </Col>
  </Row>
);

const CompletePet = props => (
  <Row id="CompletePet">
    <Col md="6">
      <PetImage name={props.pet.name} />
    </Col>
    <Col md="6">
      <Fade left>
        <PetData
          likes={props.likes}
          handleLike={props.handleLike}
          pet={props.pet}
        />
      </Fade>
      <Zoom delay={3000}>
        <Tada delay={3500}>
          <PetAdopt />
        </Tada>
      </Zoom>
    </Col>
  </Row>
);
export default CompletePet;
