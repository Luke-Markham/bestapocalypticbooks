import React from 'react';
import {
  fetchBookPageBookSuccess,
  fetchBookPageRelatedBooksSuccess,
} from '../../redux/bookPage/bookPageActions';
import { connect } from 'react-redux';
import { dashlize } from '../../utilities/funcs';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedCarousel = ({
  books,
  relatedSeries,
  clearPreviousBookPageBookState,
  clearPreviousBookPageRelatedBooksState,
  pushBookToBookPageState,
  pushRelatedBooksToBookPageState,
}) => {
  const history = useHistory();

  const handleCarouselItemSelect = async (book) => {
    await clearPreviousBookPageBookState(null);
    await clearPreviousBookPageRelatedBooksState(null);
    pushBookToBookPageState(book);
    pushRelatedBooksToBookPageState(books);
    history.push(`/books/${dashlize(book.title)}`);
  };

  return (
    <Fade duration={1000}>
      <div
        className="related-carousel-master-container"
        name="book-page-related-carousel"
      >
        <p className="related-carousel-series">
          More in the {relatedSeries} series
        </p>
        {books ? (
          <Carousel
            responsive={{
              xxl: {
                breakpoint: {
                  max: 10000,
                  min: 1620,
                },
                items: 6,
                slidesToSlide: 2,
              },
              xl: {
                breakpoint: {
                  max: 1620,
                  min: 1370,
                },
                items: 5,
                slidesToSlide: 5,
              },

              l: {
                breakpoint: {
                  max: 1370,
                  min: 1080,
                },
                items: 4,
                slidesToSlide: 3, // optional, default to 1.
              },
              m: {
                breakpoint: {
                  max: 1080,
                  min: 810,
                },
                items: 3,
                slidesToSlide: 3, // optional, default to 1.
              },
              s: {
                breakpoint: {
                  max: 810,
                  min: 540,
                },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
              },
              xs: {
                breakpoint: {
                  max: 500,
                  min: 0,
                },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              },
            }}
            className="related-carousel-container"
            itemClass="related-carousel-item-container"
            minimumTouchDrag={80}
            swipeable
            draggable
            centerMode
            customTransition="all 750ms ease-in-out"
          >
            {books.map((book, index) => {
              return (
                <img
                  key={index}
                  className="related-carousel-item"
                  src={book.picUrl}
                  alt="book cover"
                  onClick={() => handleCarouselItemSelect(book)}
                />
              );
            })}
          </Carousel>
        ) : null}
      </div>
    </Fade>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearPreviousBookPageBookState: (clearValue) =>
    dispatch(fetchBookPageBookSuccess(clearValue)),
  clearPreviousBookPageRelatedBooksState: (clearValue) =>
    dispatch(fetchBookPageRelatedBooksSuccess(clearValue)),
  pushBookToBookPageState: (book) => dispatch(fetchBookPageBookSuccess(book)),
  pushRelatedBooksToBookPageState: (books) =>
    dispatch(fetchBookPageRelatedBooksSuccess(books)),
});

export default connect(null, mapDispatchToProps)(RelatedCarousel);
