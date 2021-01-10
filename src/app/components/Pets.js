import { Row, Col } from 'reactstrap';
import Pet from './Pet';

const Pets = props => (
  <Row className="py-5 text-center">
    <Col>
      <h2 className="mb-5">Are you ready to meet your new best friend?</h2>
      {props.pets.length === 0 && <p>No pets found!</p>}
      <Row>
        {props.pets.length !== 0 &&
          Array.from(props.pets).map(pet => <Pet pet={pet} key={pet} />)}
      </Row>
    </Col>
  </Row>
);

export default Pets;
