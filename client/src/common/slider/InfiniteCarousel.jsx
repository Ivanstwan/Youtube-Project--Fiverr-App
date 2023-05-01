import React, { useRef, useState, useEffect } from 'react';
import './InfiniteCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const InfiniteCarousel = (props) => {
  const { data } = props;
  const { children } = props;
  const numOfChildren = React.Children.count(children);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (targetRef.current) {
        setCarouselWidth(targetRef.current.offsetWidth);
        console.log(carouselWidth, ' [div width] ');
      }
    };

    updateWidth();

    // listener for resize screen, adjust width of element
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [targetRef.current]);

  const clickNext = () => {
    if (currentIndex < numOfChildren - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const clickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  console.log(targetRef, '[targetref]');
  console.log(data, '[data]');
  console.log(children, '[children]');

  const slidesPerRow = 1;

  return (
    <div className="carousel" ref={targetRef}>
      <button className="carousel-prev" onClick={clickPrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="carousel-track">
        {React.Children.map(children, (child, index) => {
          // React.cloneElement(child, {
          //   style: { ...child.props.style, opacity: 0.5 },
          // })
          return (
            <div
              className="carousel-item"
              style={{
                width: `${100 / slidesPerRow}%`,
                // left: `${index * 200}px`,
                transform: `translateX(${
                  (index * carouselWidth - currentIndex * carouselWidth) / 4
                }px)`,
              }}
            >
              {React.cloneElement(child)}
            </div>
          );
        })}
      </div>
      <button className="carousel-next" onClick={clickNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default InfiniteCarousel;
