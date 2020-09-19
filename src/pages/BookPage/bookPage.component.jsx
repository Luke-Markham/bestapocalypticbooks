import React, { useEffect } from 'react';
import {
  fetchBookPageBookAsync,
  fetchBookPageBookSuccess,
} from '../../redux/bookPage/bookPageActions';
import { connect } from 'react-redux';
import FullBook from '../../components/fullBook/fullBook.component';
import { useParams } from 'react-router-dom';
import { dedashlize } from '../../utilities/funcs';

const BookPage = ({ book, isFetching, fetchBookPageBookAsync }) => {
  const para = useParams();
  console.log(para);
  console.log(book);
  useEffect(() => {
    if (!book) {
      console.log('in here');
      // below function isnt being triggered, sleep time
      fetchBookPageBookAsync(dedashlize(para.id));
    }
  });
  return (
    <div className="book-page-container">
      {!book ? (
        <h1>LOADING....</h1>
      ) : (
        <FullBook isFetching={isFetching} book={book} />
      )}
    </div>
  );
};

const mapStateToProps = ({ bookPage }) => ({
  book: bookPage.bookResult,
  isFetching: bookPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookPageBookAsync: (title) => dispatch(fetchBookPageBookAsync(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
