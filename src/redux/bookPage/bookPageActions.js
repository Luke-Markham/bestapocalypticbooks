import { firestore } from '../../firebase/firebase';
import { camelize, dedashlize } from '../../utilities/funcs';

// BOOK =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const fetchBookPageBookStart = () => {
  return {
    type: 'FETCH_BOOK_PAGE_BOOK_START',
  };
};

export const fetchBookPageBookSuccess = (book) => {
  return {
    type: 'FETCH_BOOK_PAGE_BOOK_SUCCESS',
    payload: book,
  };
};

export const fetchBookPageBookFailure = (errorMessage) => {
  return {
    type: 'FETCH_BOOK_PAGE_BOOK_FAILURE',
    payload: errorMessage,
  };
};

export const fetchBookPageBookAsync = (title) => {
  const titleCameled = camelize(dedashlize(title));
  return (dispatch) => {
    dispatch(fetchBookPageBookStart());
    const docRef = firestore.collection('books').doc(titleCameled);
    let book;
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          book = doc.data();
        } else {
          book = false;
        }
        dispatch(fetchBookPageBookSuccess(book));
      })
      .catch((error) => dispatch(fetchBookPageBookFailure(error.message)));
  };
};

// RELATED BOOKS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const fetchBookPageRelatedBooksStart = () => {
  return {
    type: 'FETCH_BOOK_PAGE_RELATED_BOOKS_START',
  };
};

export const fetchBookPageRelatedBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOK_PAGE_RELATED_BOOKS_SUCCESS',
    payload: books,
  };
};

export const fetchBookPageRelatedBooksFailure = (errorMessage) => {
  return {
    type: 'FETCH_BOOK_PAGE_RELATED_BOOKS_FAILURE',
    payload: errorMessage,
  };
};

export const fetchBookPageRelatedBooksAsync = (title) => {
  const titleSpaced = dedashlize(title);
  return (dispatch) => {
    dispatch(fetchBookPageRelatedBooksStart());
    const docQuery = firestore
      .collection('books')
      .where('title', '==', titleSpaced)
      .where('series.name', '>', '');

    docQuery
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            const seriesName = doc.data().series.name;
            const seriesQuery = firestore
              .collection('books')
              .where('series.name', '==', seriesName);

            seriesQuery.get().then((querySnapshot2) => {
              const relatedBooks = [];
              querySnapshot2.forEach((doc2) => {
                const book = doc2.data();
                relatedBooks.push(book);
              });

              dispatch(fetchBookPageRelatedBooksSuccess(relatedBooks));
            });
          } else {
            dispatch(fetchBookPageRelatedBooksSuccess(false));
          }
        });
      })
      .catch((error) => dispatch(fetchBookPageRelatedBooksFailure(error)));
  };
};
