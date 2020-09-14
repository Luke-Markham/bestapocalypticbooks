import { firestore } from '../../firebase/firebase';

// FEATURED BOOK =-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const fetchFeaturedBookStart = () => {
  return {
    type: 'FETCH_FEATURED_BOOK_START',
  };
};

export const fetchFeaturedBookSuccess = (featuredBook) => {
  return {
    type: 'FETCH_FEATURED_BOOK_SUCCESS',
    payload: featuredBook,
  };
};

export const fetchFeaturedBookFailure = (errorMessage) => {
  return {
    type: 'FETCH_FEATURED_BOOK_FAILURE',
    payload: errorMessage,
  };
};

export const fetchFeaturedBookAsync = () => {
  return (dispatch) => {
    dispatch(fetchFeaturedBookStart);
    const booksRef = firestore.collection('books');
    const query = booksRef.where('featureItem', '==', true);
    query
      .get()
      .then((querySnapshot) => {
        // Here you are replacing result each time in the loop, now
        // you only have 1 feature book, look out for this if you decied to have
        // multiple feature books
        let result;
        querySnapshot.forEach((doc) => {
          result = doc.data();
          result.description = result.description.split('*');
        });
        dispatch(fetchFeaturedBookSuccess(result));
      })
      .catch((error) => dispatch(fetchFeaturedBookFailure(error.message)));
  };
};
