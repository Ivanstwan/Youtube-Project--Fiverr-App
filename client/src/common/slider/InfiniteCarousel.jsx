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

  // handle resizing screen, and for the timeoutId for prevent transition (became jittery) happen when resizing
  useEffect(() => {
    let timeoutId;

    const updateWidth = () => {
      if (targetRef.current) {
        setCarouselWidth(targetRef.current.offsetWidth);
      }
      const carouselItems = document.querySelectorAll('.carousel-item');
      carouselItems.forEach((item) => {
        item.classList.add('stop-transition');
      });

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        carouselItems.forEach((item) => {
          item.classList.remove('stop-transition');
        });
      }, 500);
    };

    updateWidth();

    // listener for resize screen, adjust width of element
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timeoutId);
    };
  }, [targetRef.current]);

  const slidesPerRow = 5;

  const clickPrev = () => {
    console.log([currentIndex, slidesPerRow, numOfChildren], '[prev]');
    if (currentIndex === 0) {
      setCurrentIndex(numOfChildren - slidesPerRow);
    } else if (currentIndex >= 0) {
      currentIndex - slidesPerRow < 0
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex - slidesPerRow);
    }
  };

  const clickNext = () => {
    console.log([currentIndex, slidesPerRow, numOfChildren], '[next]');
    if (currentIndex < numOfChildren) {
      currentIndex + slidesPerRow >= numOfChildren
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + slidesPerRow);
    }
  };

  // console.log(targetRef, '[targetref]');
  // console.log(data, '[data]');
  // console.log(children, '[children]');

  return (
    <div className="carousel" ref={targetRef}>
      <button className="carousel-prev" onClick={clickPrev}>
        <div className="flex h-12 w-12 justify-center rounded-full bg-white align-middle shadow-inner">
          <FontAwesomeIcon icon={faArrowLeft} className="m-auto block" />
        </div>
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
                transform: `translateX(${
                  (index * carouselWidth - currentIndex * carouselWidth) /
                  slidesPerRow
                }px)`,
              }}
            >
              {React.cloneElement(child)}
            </div>
          );
        })}
      </div>
      <button className="carousel-next" onClick={clickNext}>
        <div className="flex h-12 w-12 justify-center rounded-full bg-white align-middle shadow-inner">
          <FontAwesomeIcon icon={faArrowRight} className="m-auto block" />
        </div>
      </button>
    </div>
  );
};

export default InfiniteCarousel;
