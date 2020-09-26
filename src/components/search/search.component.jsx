import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchSearchResultsAsync,
  fetchSearchSuccess,
  fetchSearchStart,
  toggleSearchBar,
} from '../../redux/search/searchActions';
import { fetchBookPageBookSuccess } from '../../redux/bookPage/bookPageActions';
import { fetchAuthorPageBooksSuccess } from '../../redux/authorPage/authorPageActions';
import SearchIcon from '../../assets/svg/search.svg';
import CloseIcon from '../../assets/svg/close.svg';
import SearchResult from '../searchResult/searchResult.component';
import { dashlize, cacheImage } from '../../utilities/funcs';

const Search = ({
  // Search Bar
  toggleSearchBar,
  isSearchBarOpen,
  // Searching
  setStartSearching,
  fetchSearchResultsAsync,
  isSearching,
  searchResults,
  clearSearchResults,
  // Book Page
  clearPreviousBookPageBookState,
  pushBookToBookPageState,
  // Author Page
  clearPreviousAuthorPageBooksState,
  pushBooksToAuthorPageBooksState,
}) => {
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState('');
  const [typingTimer, setTypingTimer] = useState();
  const [cursor, setCursor] = useState(-1);

  //  =-=-=-=-=-=-= Handle selection of a search result =-=-=-=-=-=-=

  const handleTitleSelect = async (result) => {
    await clearPreviousBookPageBookState(null);
    history.push(`/books/${dashlize(result.title)}`);
    pushBookToBookPageState(result);
    toggleSearchBar();
    setSearchInputValue('');
  };

  const handleAuthorSelect = async (result) => {
    await clearPreviousAuthorPageBooksState(null);
    const imagesForCache = [];
    const authorsBooks = searchResults.filter((book) => {
      imagesForCache.push(book.src);
      return book.author === result.author && book.title !== undefined;
    });
    cacheImage(imagesForCache);
    history.push(`/authors/${dashlize(result.author)}`);
    pushBooksToAuthorPageBooksState(authorsBooks);
    toggleSearchBar();
    setSearchInputValue('');
  };

  const handleSearchResultSelection = (result) => {
    if (result.typeOfQuery === 'author') {
      handleAuthorSelect(result);
    } else if (result.typeOfQuery === 'series') {
      console.log('series:', result);
    } else if (result.typeOfQuery === 'genre') {
      console.log('genre:', result);
    } else {
      handleTitleSelect(result);
    }
  };
  // =-=-=-=-=-=-= Handle Search typing and navigation of results =-=-=-=-=-=-=

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
    setStartSearching();
  }

  function handleSearching() {
    clearTimeout(typingTimer);
    if (searchInputValue) {
      setTypingTimer(
        setTimeout(() => {
          fetchSearchResultsAsync(searchInputValue);
        }, 400)
      );
    } else {
      clearSearchResults(false);
    }
  }

  function handleArrowToggle(key) {
    if (key === 'ArrowDown' && cursor !== searchResults.length - 1) {
      setCursor(cursor + 1);
    } else if (key === 'ArrowUp' && cursor !== 0) {
      setCursor(cursor - 1);
    }
  }

  function handlePressEnter() {
    handleSearchResultSelection(searchResults[cursor]);
    // console.log(searchResults[cursor]);
  }

  function handleInputKeyDown(e) {
    if (
      searchInputValue.length > 0 &&
      searchResults.length > 0 &&
      (e.key === 'ArrowDown' || e.key === 'ArrowUp')
    ) {
      e.preventDefault();
      handleArrowToggle(e.key);
    } else if (
      searchInputValue.length > 0 &&
      searchResults.length > 0 &&
      e.key === 'Enter'
    ) {
      handlePressEnter();
    } else {
      handleSearching();
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        {/* =-=-=-=-=-=-=-= Open Search =-=-=-=-=-=-=-= */}
        {isSearchBarOpen ? null : (
          <div
            onClick={() => toggleSearchBar()}
            className={`search-bar-icon-container ${
              isSearchBarOpen ? 'search-bar-icon-bkg' : ''
            }`}
          >
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="search-bar-search-icon"
            />
          </div>
        )}
        {/* =-=-=-=-=-=-=-= Search Input =-=-=-=-=-=-=-= */}
        <input
          className={`search-bar-input ${
            isSearchBarOpen ? 'search-bar-input-open' : ''
          }`}
          type="text"
          placeholder="Titles, Authors, Series, Genre"
          onChange={(e) => handleInputChange(e)}
          onKeyUp={(e) => {
            handleInputKeyDown(e);
          }}
          value={searchInputValue}
        />
        {/* =-=-=-=-=-=-=-= Close Search =-=-=-=-=-=-=-= */}
        <div
          onClick={() => {
            toggleSearchBar();
            setSearchInputValue('');
          }}
          className={`search-bar-icon-container ${
            isSearchBarOpen ? 'search-bar-icon-bkg' : ''
          }`}
        >
          <img
            src={CloseIcon}
            alt="Close Icon"
            className={`search-bar-search-close ${
              isSearchBarOpen ? 'search-bar-search-close-show' : ''
            }`}
          />
        </div>
      </div>
      {/* =-=-=-=-=-=-=-= Search Results =-=-=-=-=-=-=-= */}
      <div className="search-results-container">
        {searchInputValue && isSearching ? (
          <span className="search-searching">Searching...</span>
        ) : searchInputValue && !searchResults ? (
          <span className="search-no-results">No Results</span>
        ) : searchInputValue && searchResults.length > 0 ? (
          searchResults.map((result, index) => {
            return (
              <SearchResult
                cursorPosition={cursor}
                handleSearchResultSelection={handleSearchResultSelection}
                result={result}
                key={index}
                index={index}
              />
            );
          })
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // Search Bar
  toggleSearchBar: () => dispatch(toggleSearchBar()),
  // Search Results
  fetchSearchResultsAsync: (searchInputValue) =>
    dispatch(fetchSearchResultsAsync(searchInputValue)),
  clearSearchResults: (booleanFalse) =>
    dispatch(fetchSearchSuccess(booleanFalse)),
  setStartSearching: () => dispatch(fetchSearchStart()),
  // Book Page
  clearPreviousBookPageBookState: (clearValue) =>
    dispatch(fetchBookPageBookSuccess(clearValue)),
  pushBookToBookPageState: (book) => dispatch(fetchBookPageBookSuccess(book)),
  // Author Page
  clearPreviousAuthorPageBooksState: (clearValue) =>
    dispatch(fetchAuthorPageBooksSuccess(clearValue)),
  pushBooksToAuthorPageBooksState: (book) =>
    dispatch(fetchAuthorPageBooksSuccess(book)),
});

const mapStateToProps = ({ search }) => ({
  searchResults: search.searchResults,
  isSearching: search.isSearching,
  isSearchBarOpen: search.isSearchBarOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
