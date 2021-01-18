import React from 'react';
import LogoImg from '../assets/midnight-bakery.jpg';

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="Bakery Logo" style={{ width: 50, height: 40 }} />
    </div>
  );
};
export default Logo;
