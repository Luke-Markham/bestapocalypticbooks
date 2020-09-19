const INITIAL_STATE = {
  isSearchBarOpen: false,
  isSearching: false,
  searchResults: [],
  errorMessage: undefined,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_BAR':
      return {
        ...state,
        isSearchBarOpen: !state.isSearchBarOpen,
      };
    case 'FETCH_SEARCH_START':
      return {
        ...state,
        isSearching: true,
      };
    case 'FETCH_SEARCH_SUCCESS':
      return {
        ...state,
        isSearching: false,
        searchResults: action.payload,
      };
    case 'FETCH_SEARCH_FAILURE':
      return {
        ...state,
        isSearching: false,
        errorMessage: action.payload,
      };
    case 'FETCH_SEARCH_RESULTS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_SEARCH_RESULTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        searchResults: action.payload,
      };
    case 'FETCH_SEARCH_RESULTS_FAILURE':
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
