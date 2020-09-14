import React from 'react';

const AudioPlayer = ({ audioSrc }) => {
  return (
    <div className="audioPlayer-container">
      <audio className="audio-player" controls>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
