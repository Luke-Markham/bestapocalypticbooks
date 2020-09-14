import React from 'react';
import bomb from '../../assets/svg/nuclear-bomb.svg';
import explosion from '../../assets/svg/nuclear.svg';

const FourZeroFour = () => {
  return (
    <div className="_404-page-container">
      <div className="content-frame-404-page">
        <img src={bomb} alt="nuclear bomb" className="bomb" />
        <img src={explosion} alt="nuclear explosion" className="explosion" />
        <p className="_404-text">This page does not exist </p>
      </div>
    </div>
  );
};

export default FourZeroFour;
