import { firestore } from '../../firebase/firebase';
import { dedashlize } from '../../utilities/funcs';

export const fetchAuthorPageBooksStart = () => {
  return {
    type: 'FETCH_AUTHOR_PAGE_BOOKS_START',
  };
};

export const fetchAuthorPageBooksSuccess = (books) => {
  return {
    type: 'FETCH_AUTHOR_PAGE_BOOKS_SUCCESS',
    payload: books,
  };
};

export const fetchAuthorPageBooksFailure = (errorMessage) => {
  return {
    type: 'FETCH_AUTHOR_PAGE_BOOKS_FAILURE',
    payload: errorMessage,
  };
};

export const fetchAuthorPageBooksAsync = (author) => {
  const authorName = dedashlize(author);
  return (dispatch) => {
    dispatch(fetchAuthorPageBooksStart());
    const booksRef = firestore.collection('books');
    const authorQuery = booksRef.where('author', '==', authorName);
    authorQuery
      .get()
      .then((querySnapshot) => {
        const books = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          books.push(data);
        });
        dispatch(fetchAuthorPageBooksSuccess(books));
      })
      .catch((error) => dispatch(fetchAuthorPageBooksFailure(error)));
  };
};
