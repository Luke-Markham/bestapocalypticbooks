import { firestore } from '../../firebase/firebase';
import { camelize } from '../../utilities/funcs';

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
  const titleCameled = camelize(title);
  return (dispatch) => {
    fetchBookPageBookStart();
    const docRef = firestore.collection('books').doc(titleCameled);
    let result;

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          result = doc.data();
          result.description = result.description.split('*');
        } else {
          result = false;
        }
        dispatch(fetchBookPageBookSuccess(result));
      })
      .catch((error) => dispatch(fetchBookPageBookFailure(error.message)));
  };
};
