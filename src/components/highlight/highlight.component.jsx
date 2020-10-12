import React from 'react';
import { connect } from 'react-redux';
import { handleDesc, dashlize } from '../../utilities/funcs';
import { useHistory } from 'react-router-dom';
import {
  fetchBookPageBookSuccess,
  fetchBookPageRelatedBooksSuccess,
  fetchBookPageRelatedBooksAsync,
} from '../../redux/bookPage/bookPageActions';
import GeneralBtn from '../generalBtn/generalBtn.component';
import AudioPlayer from '../audioPlayer/audioPlayer.component';
import close from '../../assets/svg/close.svg';

const Highlight = ({
  book,
  handleOpenHighlight,
  setActiveItem,
  isMobile,
  clearPreviousBookPageBookState,
  clearPreviousBookPageRelatedBooksState,
  pushBookToBookPageState,
  fetchBookPageRelatedBooksAsync,
}) => {
  const history = useHistory();
  const mobileBkgStyle = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.9)),
linear-gradient(to right, rgba(0, 0, 0, 1),
 rgba(0, 0, 0, 0.7) 60% ), url(${book.picUrl})`;

  const handleMoreInfo = async () => {
    await clearPreviousBookPageBookState(null);
    await clearPreviousBookPageRelatedBooksState(null);
    pushBookToBookPageState(book);
    fetchBookPageRelatedBooksAsync(book.title);
    history.push(`/books/${dashlize(book.title)}`);
  };

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

  return (
    <div
      className="highlight-container"
      style={{
        backgroundImage: mobileBkgStyle,
      }}
    >
      <div className="highlight-details-container">
        <h2 className="highlight-title">{title}</h2>
        <div className="highlight-author-and-series-container">
          <p className="highlight-author">{author}</p>
          {series && series.name ? (
            <p className="highlight-series">
              (Book {series.number} {series.name})
            </p>
          ) : null}
        </div>
        <p className="highlight-blurb">
          {handleDesc(description, 'highlight')}
        </p>
        <div className="highlight-audio-and-buttons-container">
          <AudioPlayer audioSrc={audio} />
          <div className="highlight-buttons-container">
            <GeneralBtn
              colorClass="purchase"
              text="Audiobook"
              link={links.audiobook}
            />
            <GeneralBtn
              colorClass="purchase"
              text="Kindle"
              link={links.kindle}
            />
            <GeneralBtn
              colorClass="purchase"
              text="Paperback"
              link={links.paperback}
            />
            <GeneralBtn
              colorClass="more-info"
              text={isMobile ? 'More' : 'More Info'}
              func={handleMoreInfo}
            />
          </div>
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
      {!isMobile ? (
        <div className="highlight-cover-img-container">
          <img alt="book cover" src={picUrl} />
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearPreviousBookPageBookState: (clearValue) =>
    dispatch(fetchBookPageBookSuccess(clearValue)),
  clearPreviousBookPageRelatedBooksState: (clearValue) =>
    dispatch(fetchBookPageRelatedBooksSuccess(clearValue)),
  pushBookToBookPageState: (book) => dispatch(fetchBookPageBookSuccess(book)),
  fetchBookPageRelatedBooksAsync: (title) =>
    dispatch(fetchBookPageRelatedBooksAsync(title)),
});

export default connect(null, mapDispatchToProps)(Highlight);
