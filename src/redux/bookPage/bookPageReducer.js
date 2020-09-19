const INITIAL_STATE = {
  isFetching: false,
  bookResult: null,
  errorMessage: '',
};

const bookPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_PAGE_BOOK_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_BOOK_PAGE_BOOK_SUCCESS':
      return {
        ...state,
        isFetching: false,
        bookResult: action.payload,
      };
    case 'FETCH_BOOK_PAGE_BOOK_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default bookPageReducer;
