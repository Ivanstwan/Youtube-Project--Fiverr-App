import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slider/Slide';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
    </div>
  );
};

export default Home;
