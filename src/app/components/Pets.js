import { Row } from 'reactstrap';
import Pet from './Pet';

const Pets = props => (
  <Row>
    {props.pets.length === 0 && <p>No pets found!</p>}
    {props.pets.length !== 0 &&
      Array.from(props.pets).map(pet => <Pet pet={pet} key={pet} />)}
  </Row>
);

export default Pets;
