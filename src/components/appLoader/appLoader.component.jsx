import React, { useEffect } from 'react';
import Fade from 'react-reveal';

const AppLoader = () => {
  useEffect(() => {
    let tID;
    let position = 256;
    const interval = 100;
    tID = setInterval(() => {
      document.getElementById(
        'loading'
      ).style.backgroundPosition = `-${position}px 0px`;

      if (position < 3070) {
        position = position + 256;
      } else {
        position = 256;
      }
    }, interval);

    return () => {
      clearInterval(tID);
    };
  });
  return (
    <div className="app-loader-container">
      <Fade>
        <div id="loading" />
      </Fade>
    </div>
  );
};

export default AppLoader;
