import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const Loader = ({ size, color }) => {
  return (
    <div className="loader-container">
      <PuffLoader size={size} color={color} loading={true} />
    </div>
  );
};

export default Loader;
