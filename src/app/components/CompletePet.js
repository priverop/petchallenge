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
        className="img-fluid"
        src="https://loremflickr.com/320/240/dog"
        alt="Dog!"
      />
      <CardBody>
        <CardTitle tag="h5">{props.pet.name}</CardTitle>
        <CardSubtitle tag="h6">{props.pet.date}</CardSubtitle>
        <CardText>Hey! This is a dog!</CardText>
        <Button
          onClick={() => {
            props.handleLike();
          }}
        >
          Like! ({props.likes})
        </Button>
      </CardBody>
    </Card>
  </Col>
);
export default CompletePet;
