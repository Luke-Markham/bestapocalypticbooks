import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { fetchAuthorPageBooksAsync } from '../../redux/authorPage/authorPageActions';
import BooksInGrid from '../../components/booksInGrid/booksInGrid.component';

const AuthorPage = ({ authorsBooks, fetchAuthorPageBooksAsync }) => {
  const para = useParams();

  const [path, setPath] = React.useState();

  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 1)),
    linear-gradient(to right, rgba(0, 0, 0, 1),
     rgba(0, 0, 0, 0.5) 60% ), url(${path})`,
  };

  React.useEffect(() => {
    if (!authorsBooks) {
      fetchAuthorPageBooksAsync(para.id);
    }
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        setPath(require('../../assets/png/bookBkg-1.jpg'));
        break;
      case 2:
        setPath(require('../../assets/png/bookBkg-2.jpg'));
        break;
      case 3:
        setPath(require('../../assets/png/bookBkg-3.jpg'));
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fade>
      <div className="author-page-container" style={style}>
        <Fade duratation={1000} delay={500}>
          <p className="author-page-author-name">
            {authorsBooks ? authorsBooks[0].author : null}
          </p>
        </Fade>
        {authorsBooks ? (
          <Fade duratation={1000}>
            <BooksInGrid books={authorsBooks} />
          </Fade>
        ) : null}
      </div>
    </Fade>
  );
};

const mapStateToProps = ({ authorPage }) => ({
  authorsBooks: authorPage.authorsBooks,
  isFetching: authorPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuthorPageBooksAsync: (title) =>
    dispatch(fetchAuthorPageBooksAsync(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
