import React from 'react';
import {
  fetchBookPageBookAsync,
  fetchBookPageRelatedBooksAsync,
} from '../../redux/bookPage/bookPageActions';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import FullBook from '../../components/fullBook/fullBook.component';
import { useParams } from 'react-router-dom';
import RelatedCarousel from '../../components/relatedCarousel/relatedCarousel.component';

const BookPage = ({
  book,
  relatedBooks,
  isFetchingBook,
  fetchBookPageBookAsync,
  fetchBookPageRelatedBooksAsync,
}) => {
  const para = useParams();

  const [path, setPath] = React.useState();

  const style = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 60% ), url(${path})`,
  };

  React.useEffect(() => {
    if (!book) {
      fetchBookPageBookAsync(para.id);
      fetchBookPageRelatedBooksAsync(para.id);
    }
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        setPath(require('../../assets/png/bookBkg-1.jpg'));
        break;
      case 2:
        setPath(require('../../assets/png/bookBkg-2.jpg'));
        break;
      case 3:
        setPath(require('../../assets/png/bookBkg-3.png'));
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBookPageBookAsync, fetchBookPageRelatedBooksAsync, para.id]);

  return (
    <Fade>
      <div className="book-page-container" style={style}>
        {!book ? null : <FullBook isFetching={isFetchingBook} book={book} />}
        {!relatedBooks && !book ? null : (
          <RelatedCarousel
            relatedSeries={relatedBooks ? relatedBooks[0].series.name : null}
            books={relatedBooks}
          />
        )}
      </div>
    </Fade>
  );
};

const mapStateToProps = ({ bookPage }) => ({
  book: bookPage.book,
  isFetchingBook: bookPage.isFetchingBook,
  relatedBooks: bookPage.relatedBooks,
  isFetchingRelatedBooks: bookPage.isFetchingRelatedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBookPageBookAsync: (title) => dispatch(fetchBookPageBookAsync(title)),
  fetchBookPageRelatedBooksAsync: (title) =>
    dispatch(fetchBookPageRelatedBooksAsync(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
