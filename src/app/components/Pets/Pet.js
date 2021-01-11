import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Pet = props => (
  <Col>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://loremflickr.com/320/240/dog"
        alt="Your pet!"
      />
      <CardBody>
        <CardTitle tag="h5" className="main-color">
          {props.pet.name}
        </CardTitle>
        <CardSubtitle tag="h6">{props.pet.date}</CardSubtitle>
        <CardText>Hey! This is a dog!</CardText>
        <Link
          to={{
            pathname: `/pet/${props.pet.index}`,
          }}
        >
          <Button>Take a look!</Button>
        </Link>
      </CardBody>
    </Card>
  </Col>
);
export default Pet;
