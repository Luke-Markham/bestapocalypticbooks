import React from 'react';
import { connect } from 'react-redux';
import { handleDesc, dashlize } from '../../utilities/funcs';
import { useLocation, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  fetchBookPageBookSuccess,
  fetchBookPageRelatedBooksSuccess,
  fetchBookPageRelatedBooksAsync,
} from '../../redux/bookPage/bookPageActions';
import Fade from 'react-reveal/Fade';
import GeneralBtn from '../generalBtn/generalBtn.component';
import AudioPlayer from '../audioPlayer/audioPlayer.component';

const FullBook = ({
  isFetching,
  book,
  clearPreviousBookPageBookState,
  clearPreviousBookPageRelatedBooksState,
  pushBookToBookPageState,
  fetchBookPageRelatedBooksAsync,
}) => {
  const location = useLocation().pathname;
  const history = useHistory();
  const handleMoreInfo = async () => {
    await clearPreviousBookPageBookState(null);
    await clearPreviousBookPageRelatedBooksState(null);
    pushBookToBookPageState(book);
    fetchBookPageRelatedBooksAsync(book.title);
    history.push(`/books/${dashlize(book.title)}`);
  };
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  return (
    <div className="full-book-container">
      {isFetching || !book ? null : (
        <>
          {isMobile ? null : (
            <Fade left duration={1000} delay={250}>
              <div className="full-book-description-container">
                <h3 className="full-book-title">{book.title}</h3>
                <div className="full-book-author-and-series-container">
                  <p className="full-book-author">{book.author}</p>
                  {book.series && book.series.name ? (
                    <p className="full-book-series">
                      (Book {book.series.number} {book.series.name})
                    </p>
                  ) : null}
                </div>
                <p className="full-book-blurb">
                  {handleDesc(book.description)}
                </p>
              </div>
            </Fade>
          )}
          <Fade right duration={1000} delay={250}>
            <div className="full-book-img-container">
              <img
                src={book.picUrl}
                alt="featured item cover"
                className="full-book-img"
              />
            </div>
          </Fade>
          <Fade left duration={1000} delay={250}>
            <div className="btn-links-and-audio-container">
              <GeneralBtn
                className="button-audiobook"
                colorClass="purchase"
                text="Audiobook"
                link={book.links.audiobook}
              />
              <GeneralBtn
                className="button-kindle"
                colorClass="purchase"
                text="Kindle"
                link={book.links.kindle}
              />
              <GeneralBtn
                className="button-paperback"
                colorClass="purchase"
                text="Paperback"
                link={book.links.paperback}
              />
              {location === '/home' ? (
                <GeneralBtn
                  className="button-moreInfo"
                  colorClass="more-info"
                  text={isMobile ? 'More' : 'More Info'}
                  func={handleMoreInfo}
                />
              ) : null}
            </div>
          </Fade>
          <Fade right duration={1000} delay={300}>
            <div className="audioPlayer-container">
              <AudioPlayer audioSrc={book.audio} />
            </div>
          </Fade>
        </>
      )}
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

export default connect(null, mapDispatchToProps)(FullBook);
