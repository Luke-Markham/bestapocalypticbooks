const INITIAL_STATE = {
  isFetching: false,
  errorMessage: undefined,
};

const carouselBooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CAROUSEL_BOOKS_START':
      return {
        ...state,
        isFetching: true,
        [action.payload]: [],
      };
    case 'FETCH_CAROUSEL_BOOKS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        [action.payload.genre]: action.payload.result,
      };
    case 'FETCH_CAROUSEL_BOOKS_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default carouselBooksReducer;
