import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoIcon from '../../assets/svg/logo.svg';

const Logo = () => {
  const history = useHistory();
  return (
    <div className="logo-container">
      <img
        src={LogoIcon}
        alt="logo"
        className="logo"
        onClick={() => history.push('/home')}
      />
    </div>
  );
};

export default Logo;
