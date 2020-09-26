import { combineReducers } from 'redux';
import featuredBookReducer from './featuredBook/featuredBookReducer';
import carouselBooksReducer from './carousel/carouselReducer';
import navReducer from './nav/navReducer';
import searchReducer from './search/searchReducer';
import bookPageReducer from './bookPage/bookPageReducer';
import authorPageReducer from './authorPage/authorPageReducer';

export default combineReducers({
  featuredBook: featuredBookReducer,
  carouselBooks: carouselBooksReducer,
  nav: navReducer,
  search: searchReducer,
  bookPage: bookPageReducer,
  authorPage: authorPageReducer,
});
