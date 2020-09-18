import { firestore } from '../../firebase/firebase';

// FEATURED BOOK =-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const fetchCarouselBooksStart = (genre) => {
  return {
    type: 'FETCH_CAROUSEL_BOOKS_START',
    payload: genre,
  };
};

export const fetchCarouselBooksSuccess = (books) => {
  return {
    type: 'FETCH_CAROUSEL_BOOKS_SUCCESS',
    payload: books,
  };
};

export const fetchCarouselBooksFailure = (errorMessage) => {
  return {
    type: 'FETCH_CAROUSEL_BOOKS_FAILURE',
    payload: errorMessage,
  };
};

export const fetchCarouselBooksAsync = (genre) => {
  return (dispatch) => {
    fetchCarouselBooksStart(genre);
    const booksRef = firestore.collection('books');
    const query = booksRef.where('tags', 'array-contains', `${genre}`);
    query
      .get()
      .then((querySnapshot) => {
        let result = [];
        querySnapshot.forEach((doc) => {
          const bookData = doc.data();
          bookData.description = bookData.description.split('*');
          bookData.description.pop();
          bookData.description.pop();
          result.push(bookData);
        });
        dispatch(fetchCarouselBooksSuccess({ result, genre }));
      })
      .catch((error) => dispatch(fetchCarouselBooksFailure(error.message)));
  };
};
