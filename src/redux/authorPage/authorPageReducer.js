const INITIAL_STATE = {
  isFetching: false,
  authorsBooks: null,
  errorMessage: '',
};

const authorPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_AUTHOR_PAGE_BOOKS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_AUTHOR_PAGE_BOOKS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        authorsBooks: action.payload,
      };
    case 'FETCH_AUTHOR_PAGE_BOOKS_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authorPageReducer;
