import React from 'react';
import LogoIcon from '../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={LogoIcon} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;
