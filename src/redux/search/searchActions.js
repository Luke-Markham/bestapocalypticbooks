import { firestore } from '../../firebase/firebase';

export const fetchSearchStart = () => {
  return {
    type: 'FETCH_SEARCH_START',
  };
};

export const fetchSearchSuccess = (Search) => {
  return {
    type: 'FETCH_SEARCH_SUCCESS',
    payload: Search,
  };
};

export const fetchSearchFailure = async (errorMessage) => {
  return {
    type: 'FETCH_SEARCH__FAILURE',
    payload: errorMessage,
  };
};

export const fetchSearchAsync = (searchValue) => {
  searchValue = searchValue.toLowerCase();
  return (dispatch) => {
    // Dispatched onChange of search bar input to speed up the setting of state.search.isSearching
    // dispatch(fetchSearchStart());
    const booksRef = firestore.collection('books');
    const authorQuery = booksRef
      .where('author', '>=', searchValue)
      .where('author', '<=', searchValue + '\uf8ff');
    const titleQuery = booksRef
      .where('title', '>=', searchValue)
      .where('title', '<=', searchValue + '\uf8ff');
    const seriesQuery = booksRef
      .where('series.name', '>=', searchValue)
      .where('series.name', '<=', searchValue + '\uf8ff');
    const genreQuery = booksRef.where('tags', 'array-contains', searchValue);

    const queries = [titleQuery, authorQuery, seriesQuery, genreQuery];
    const queryTypes = ['title', 'author', 'series', 'genre'];
    const promises = [];

    queries.forEach((query, i) => {
      const promise = new Promise((resolve, reject) => {
        query.get().then((querySnapshot) => {
          const bookResults = [];
          const baseQueryResults = [];

          querySnapshot.forEach((doc) => {
            const data = doc.data();

            if (queryTypes[i] !== 'title') {
              if (baseQueryResults.includes(data[queryTypes[i]]) === false) {
                baseQueryResults.push(data[queryTypes[i]]);
              }
            }
            bookResults.push(data);
          });

          baseQueryResults.forEach((current, n) => {
            baseQueryResults[n] = {
              typeOfQuery: queryTypes[i],
              [queryTypes[i]]: current,
            };
          });

          const result = baseQueryResults.concat(bookResults);

          resolve(result);
          reject(new Error('promise failed'));
        });
      }).then();

      promises.push(promise);
    });

    Promise.all(promises)
      .then((values) => {
        console.log(values);
        let result = values.flat();
        if (result.length === 0) {
          result = false;
        }
        dispatch(fetchSearchSuccess(result));
      })
      .catch((error) => dispatch(fetchSearchFailure(error)));
  };
};
