import { Col, Row } from 'reactstrap';
import './CompletePet.scss';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

import PetAdopt from './PetAdopt';
import PetImage from './PetImage';
import PetData from './PetData';

const CompletePet = props => (
  <Row id="CompletePet">
    <Col md="6" xs="12">
      <PetImage name={props.pet.name} img={props.pet.img} />
    </Col>
    <Col md="6" xs="12">
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
