import React from 'react';
import { handleDesc } from '../../utilities/funcs';

import Fade from 'react-reveal/Fade';
import GeneralBtn from '../generalBtn/generalBtn.component';
import AudioPlayer from '../audioPlayer/audioPlayer.component';

const FullBook = ({ isFetching, book }) => {
  return (
    <div className="full-book-container">
      {isFetching || !book ? null : (
        <>
          <Fade left duration={1000} delay={250}>
            <div className="full-book-description-container">
              <h3 className="full-book-title">{book.title}</h3>
              <p className="full-book-author">{book.author}</p>
              <p className="full-book-blurb">{handleDesc(book.description)}</p>
            </div>
          </Fade>
          <Fade right duration={1000} delay={250}>
            <div className="full-book-img-container">
              <img
                src={book.picUrl}
                alt="featured item cover"
                className="full-book-img"
              />
            </div>
          </Fade>
          <Fade up duration={1000} delay={250}>
            <div className="btn-links-and-audio-container">
              <GeneralBtn
                colorClass="purchase"
                text="Audiobook"
                link={book.links.audiobook}
              />
              <GeneralBtn
                colorClass="purchase"
                text="Kindle"
                link={book.links.kindle}
              />
              <GeneralBtn
                colorClass="purchase"
                text="Paperback"
                link={book.links.paperback}
              />
              <GeneralBtn colorClass="more-info" text="More Info" />
              <AudioPlayer audioSrc={book.audio} />
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};

export default FullBook;