import Bounce from 'react-reveal/Bounce';
import { getPetsImagesPath } from '../../utils/directories';

const PetImage = props => (
  <Bounce delay={500}>
    <img
      className="full-pet-image img-fluid"
      src={`${getPetsImagesPath() + props.img}`}
      alt={props.name}
    />
  </Bounce>
);

export default PetImage;
