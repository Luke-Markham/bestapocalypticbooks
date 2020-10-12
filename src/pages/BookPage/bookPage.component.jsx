import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchBookPageBookAsync,
  fetchBookPageRelatedBooksAsync,
  fetchBookPageBookSuccess,
} from '../../redux/bookPage/bookPageActions';
import downArrow from '../../assets/svg/down-arrow.svg';
import Fade from 'react-reveal/Fade';
import FullBook from '../../components/fullBook/fullBook.component';
import RelatedCarousel from '../../components/relatedCarousel/relatedCarousel.component';
import { Element, Link } from 'react-scroll';

const ScrollElement = Element;
const ScrollLink = Link;

const BookPage = ({
  navHeight,
  book,
  relatedBooks,
  isFetchingBook,
  fetchBookPageBookAsync,
  fetchBookPageRelatedBooksAsync,
}) => {
  const para = useParams();

  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.9)),
    linear-gradient(to right, rgba(0, 0, 0, 1),
     rgba(0, 0, 0, 0.5) 60% ), url(${book ? book.picUrl : ''})`,
  };

  React.useEffect(() => {
    if (!book) {
      fetchBookPageBookAsync(para.id);
      fetchBookPageRelatedBooksAsync(para.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBookPageBookAsync, fetchBookPageRelatedBooksAsync, para.id]);

  return (
    <Fade>
      <div className="book-page-container">
        <div className="book-page-book-container" style={style}>
          {!book ? null : <FullBook isFetching={isFetchingBook} book={book} />}
          {!relatedBooks ? null : (
            <ScrollLink
              to="book-page-related-carousel"
              smooth={true}
              duration={1000}
              offset={-navHeight}
            >
              <img
                src={downArrow}
                alt="down arrow"
                className="book-page-related-down-arrow"
              />
            </ScrollLink>
          )}
        </div>
        {!relatedBooks ? null : (
          <RelatedCarousel
            relatedSeries={relatedBooks ? relatedBooks[0].series.name : null}
            books={relatedBooks}
          />
        )}
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => ({
  book: state.bookPage.book,
  isFetchingBook: state.bookPage.isFetchingBook,
  relatedBooks: state.bookPage.relatedBooks,
  isFetchingRelatedBooks: state.bookPage.isFetchingRelatedBooks,
  navHeight: state.nav.height,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookPageBookAsync: (title) => dispatch(fetchBookPageBookAsync(title)),
  fetchBookPageRelatedBooksAsync: (title) =>
    dispatch(fetchBookPageRelatedBooksAsync(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
