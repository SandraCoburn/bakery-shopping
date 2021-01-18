import React from 'react';
import LogoImg from '../assets/midnight-bakery.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-logo">
        <img src={LogoImg} alt="Bakery Logo" />
        <div className="about-me">
          <h1>The Midnight Bakery</h1>
          <p>
            My name is Taryn and I am a self taught baker who loves to make
            delicious treats. Sugar cookies, cake pops and cakes are what I do
            best!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
