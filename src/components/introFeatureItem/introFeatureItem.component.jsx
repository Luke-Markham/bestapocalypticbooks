import React from 'react';
import { handleDesc } from '../../utilities/funcs';
import Fade from 'react-reveal/Fade';
import GeneralBtn from '../generalBtn/generalBtn.component';
import AudioPlayer from '../audioPlayer/audioPlayer.component';

const IntroFeatureItem = ({ isFetching, featuredBook }) => {
  return (
    <div className="feature-item-container">
      {isFetching || !featuredBook ? null : (
        <>
          <Fade left duration={1000} delay={250}>
            <div className="feature-item-description-container">
              <h3 className="feature-item-title">{featuredBook.title}</h3>
              <p className="feature-item-author">{featuredBook.author}</p>
              <p className="feature-item-blurb">
                {handleDesc(featuredBook.description)}
              </p>
            </div>
          </Fade>
          <Fade right duration={1000} delay={250}>
            <div className="feature-item-img-container">
              <img
                src={featuredBook.picUrl}
                alt="featured item cover"
                className="feature-item-img"
              />
            </div>
          </Fade>
          <Fade up duration={1000} delay={250}>
            <div className="btn-links-and-audio-container">
              <GeneralBtn
                colorClass="purchase"
                text="Audiobook"
                link={featuredBook.links.audiobook}
              />
              <GeneralBtn
                colorClass="purchase"
                text="Kindle"
                link={featuredBook.links.kindle}
              />
              <GeneralBtn
                colorClass="purchase"
                text="Paperback"
                link={featuredBook.links.paperback}
              />
              <GeneralBtn colorClass="more-info" text="More Info" />
              <AudioPlayer audioSrc={featuredBook.audio} />
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};

export default IntroFeatureItem;
