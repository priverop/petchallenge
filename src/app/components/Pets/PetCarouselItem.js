import { CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';

const PetCarouselItem = props => (
  <Link
    to={{
      pathname: `/pet/${props.index}`,
    }}
  >
    <img src={`../img/pets/${props.img}`} height="320" alt={props.name} />
    <CarouselCaption
      captionText={props.description}
      captionHeader={props.name}
    />
  </Link>
);

export default PetCarouselItem;
