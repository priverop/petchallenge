import { Button, Col, Row } from 'reactstrap';

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
      <h3>{props.pet.description}</h3>
      <div>
        <small>
          We welcomed this cute on:{' '}
          {new Date(props.pet.created_at).toLocaleDateString('en-gb')}
        </small>
      </div>
    </Col>
  </Row>
);

export default PetData;
