import React from 'react';
import InfiniteCarousel from '../../common/slider/InfiniteCarousel';

const Slide = (cards) => {
  return (
    <div className="">
      <InfiniteCarousel>
        <p>Number 1</p>
        <p>Number 2</p>
        <p>Number 3</p>
        <p>Number 4</p>
        <p>Number 5</p>
      </InfiniteCarousel>
    </div>
  );
};

export default Slide;
