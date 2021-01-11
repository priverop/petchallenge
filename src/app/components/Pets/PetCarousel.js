import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './Pets.scss';
import PetCarouselItem from './PetCarouselItem';

const PetCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === props.pets.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.pets.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.pets.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.index}
    >
      <PetCarouselItem
        index={item.index}
        img={item.img}
        name={item.name}
        description={item.description}
      />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={props.pets}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default PetCarousel;
