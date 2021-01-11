import { Button, Col, Row } from 'reactstrap';
import { getIconsPath } from '../../utils/directories';

const PetAdopt = () => (
  <Row>
    <Col className="pt-5 text-center" id="PetAdopt">
      <h2 className="main-color">Are you in love already?</h2>
      <div className="my-3">
        <img src={`${getIconsPath()}/dog1.png`} alt="Cute dog" width="150" />
      </div>

      <Button>Adopt me</Button>
    </Col>
  </Row>
);

export default PetAdopt;
