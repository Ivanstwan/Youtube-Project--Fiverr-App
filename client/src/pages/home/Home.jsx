import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import Featured2 from '../../components/featured/Featured2';
import Featured3 from '../../components/featured/Featured3';
import Slide from '../../components/slider/Slide';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Slide />
      <Featured2 />
      <Featured3 />
    </div>
  );
};

export default Home;
