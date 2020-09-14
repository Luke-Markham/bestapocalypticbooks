const INITIAL_STATE = {
  featuredBook: null,
  isFetching: false,
  errorMessage: undefined,
};

const featuredBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_FEATURED_BOOK_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_FEATURED_BOOK_SUCCESS':
      return {
        ...state,
        isFetching: false,
        featuredBook: action.payload,
      };
    case 'FETCH_FEATURED_BOOK_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default featuredBookReducer;
