const INITIAL_STATE = {
  isFetchingBook: false,
  book: null,
  bookErrorMessage: '',
  isFetchingRelatedBooks: false,
  relatedBooks: null,
  relatedBooksErrorMessage: '',
};

const bookPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_PAGE_BOOK_START':
      return {
        ...state,
        isFetchingBook: true,
      };
    case 'FETCH_BOOK_PAGE_BOOK_SUCCESS':
      return {
        ...state,
        isFetchingBook: false,
        book: action.payload,
      };
    case 'FETCH_BOOK_PAGE_BOOK_FAILURE':
      return {
        ...state,
        isFetchingBook: false,
        bookErrorMessage: action.payload,
      };
    case 'FETCH_BOOK_PAGE_RELATED_BOOKS_START':
      return {
        ...state,
        isFetchingRelatedBooks: true,
      };
    case 'FETCH_BOOK_PAGE_RELATED_BOOKS_SUCCESS':
      return {
        ...state,
        isFetchingRelatedBooks: false,
        relatedBooks: action.payload,
      };
    case 'FETCH_BOOK_PAGE_RELATED_BOOKS_FAILURE':
      return {
        ...state,
        isFetching: false,
        relatedBooksErrorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default bookPageReducer;
