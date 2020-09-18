import React, { useEffect, useState } from 'react';
import { handleDesc } from '../../utilities/funcs';
import GeneralBtn from '../generalBtn/generalBtn.component';
import one from '../../assets/png/test-1.jpg';
import two from '../../assets/png/test-2.jpg';
import three from '../../assets/png/test-3.jpg';
import AudioPlayer from '../audioPlayer/audioPlayer.component';
import close from '../../assets/svg/close.svg';

const Highlight = ({ book, handleOpenHighlight, setActiveItem }) => {
  const [path, setPath] = useState();
  const {
    title,
    author,
    description,
    picUrl,
    links,
    series,
    tags,
    audio,
  } = book;

  useEffect(() => {
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        setPath(one);
        break;
      case 2:
        setPath(two);
        break;
      case 3:
        setPath(three);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div
      className="highlight-container"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0) 70%), url(${path})`,
      }}
    >
      <div className="highlight-details-container">
        <h2 className="highlight-title">{title}</h2>
        <p className="highlight-author">{author}</p>
        <p className="highlight-blurb">{handleDesc(description)}</p>
        <div className="highlight-buttons-and-audio-container">
          <GeneralBtn
            colorClass="purchase"
            text="Audiobook"
            link={links.audiobook}
          />
          <GeneralBtn colorClass="purchase" text="Kindle" link={links.kindle} />
          <GeneralBtn
            colorClass="purchase"
            text="Paperback"
            link={links.paperback}
          />

          <GeneralBtn colorClass="more-info" text="More info" link="#" />
          <AudioPlayer audioSrc={audio} />
        </div>
        <div className="close-highlight-button-container">
          <img
            src={close}
            alt="close highlight button"
            onClick={() => {
              handleOpenHighlight(false);
              setTimeout(() => setActiveItem(false), 300);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
