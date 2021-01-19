import React from 'react';
import HeroImg from '../assets/bgcookies.jpg';
import { useHistory } from 'react-router-dom';

const Hero = () => {
  const { push } = useHistory();
  const routeToShop = (event) => {
    event.preventDefault();
    push('/products');
  };
  return (
    <div className="hero">
      <img src={HeroImg} alt="Sugar cookies" />
      <h1>The Midnight Bakery</h1>
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
};
export default Hero;
