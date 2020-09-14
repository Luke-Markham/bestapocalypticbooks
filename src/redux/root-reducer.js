import { combineReducers } from 'redux';
import featuredBookReducer from './featuredBook/featuredBookReducer';
import carouselBooksReducer from './carousel/carouselReducer';
import navReducer from './nav/navReducer';

export default combineReducers({
  featuredBook: featuredBookReducer,
  carouselBooks: carouselBooksReducer,
  nav: navReducer,
});
