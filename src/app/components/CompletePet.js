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

const CompletePet = props => (
  <Col>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://loremflickr.com/320/240/dog"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{props.pet.name}</CardTitle>
        <CardSubtitle tag="h6">{props.pet.date}</CardSubtitle>
        <CardText>Hey! This is a dog!</CardText>
        <Button>Take a look!</Button>
      </CardBody>
    </Card>
  </Col>
);
export default CompletePet;
