import React from 'react';

const GeneralBtn = ({ colorClass, text, link, func, type }) => {
  return (
    <button
      className={colorClass + ' general-btn'}
      onClick={func ? func : null}
      type={type ? type : null}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default GeneralBtn;
