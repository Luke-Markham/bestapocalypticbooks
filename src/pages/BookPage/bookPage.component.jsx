import React from 'react';
import { fetchBookPageBookAsync } from '../../redux/bookPage/bookPageActions';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import FullBook from '../../components/fullBook/fullBook.component';
import { useParams } from 'react-router-dom';

const BookPage = ({ book, isFetching, fetchBookPageBookAsync }) => {
  const para = useParams();

  const [path, setPath] = React.useState();

  const style = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 60% ), url(${path})`,
  };

  React.useEffect(() => {
    console.log(book);
    if (!book) {
      fetchBookPageBookAsync(para.id);
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
  }, []);

  return (
    <Fade duration={500}>
      <div className="book-page-container" style={style}>
        {!book ? null : <FullBook isFetching={isFetching} book={book} />}
      </div>
    </Fade>
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
