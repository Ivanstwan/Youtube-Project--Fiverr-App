import React from 'react';
import styles from './InfiniteCarousel.module.scss';

const InfiniteCarousel = (props) => {
  return <div className={styles.carousel}>{props.children}</div>;
};

export default InfiniteCarousel;
