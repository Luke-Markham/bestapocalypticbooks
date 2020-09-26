import React from 'react';

const GeneralBtn = ({ colorClass, text, link, func }) => {
  return (
    <button
      id="general-btn"
      className={colorClass}
      onClick={func ? func : null}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default GeneralBtn;
