import React from 'react';
import HeroImg from '../assets/bgcookies.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="Sugar cookies" />
      <h1>The Midnight Bakery</h1>
    </div>
  );
};
export default Hero;
