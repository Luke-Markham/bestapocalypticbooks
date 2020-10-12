import React from 'react';
import {
  fetchBookPageBookSuccess,
  fetchBookPageRelatedBooksSuccess,
} from '../../redux/bookPage/bookPageActions';
import { connect } from 'react-redux';
import { dashlize } from '../../utilities/funcs';
import { useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

const BooksInGrid = ({
  books,
  clearPreviousBookPageBookState,
  clearPreviousBookPageRelatedBooksState,
  pushBookToBookPageState,
  pushRelatedBooksToBookPageState,
}) => {
  const history = useHistory();

  const handleBookSelect = async (book) => {
    await clearPreviousBookPageBookState(null);
    await clearPreviousBookPageRelatedBooksState(null);
    pushBookToBookPageState(book);
    const booksForPush = books.filter(
      (currentBook) => currentBook.title !== book.title
    );
    console.log(booksForPush);
    pushRelatedBooksToBookPageState(booksForPush);
    history.push(`/books/${dashlize(book.title)}`);
  };

  return (
    <div className="books-in-grid-container">
      {books.map((book, index) => {
        return (
          <LazyLoad key={index} offset={50} once>
            <Fade duration={1000}>
              <div className="books-in-grid-book-container">
                <img
                  onClick={() => handleBookSelect(book)}
                  alt="cover of book"
                  src={book.picUrl}
                  className="books-in-grid-book-img"
                />
              </div>
            </Fade>
          </LazyLoad>
        );
      })}
    </div>
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

export default connect(null, mapDispatchToProps)(BooksInGrid);
