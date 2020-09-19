import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchSearchAsync,
  fetchSearchSuccess,
  fetchSearchStart,
  toggleSearchBar,
} from '../../redux/search/searchActions';
import SearchIcon from '../../assets/svg/search.svg';
import CloseIcon from '../../assets/svg/close.svg';
import SearchResult from '../searchResult/searchResult.component';

const SearchBar = ({
  fetchSearchAsync,
  resetSearch,
  startSearching,
  searchResults,
  isSearching,
  isSearchBarOpen,
  toggleSearchBar,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [typingTimer, setTypingTimer] = useState();
  const history = useHistory();
  function handleChange(e) {
    setSearchValue(e.target.value);
    startSearching();
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
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
        <input
          className={`search-bar-input ${
            isSearchBarOpen ? 'search-bar-input-open' : ''
          }`}
          type="text"
          placeholder="Titles, Authors, Series, Genre"
          onChange={(e) => handleChange(e)}
          onKeyUp={() => {
            clearTimeout(typingTimer);
            if (searchValue) {
              setTypingTimer(
                setTimeout(() => {
                  fetchSearchAsync(searchValue);
                }, 400)
              );
            } else {
              resetSearch(false);
            }
          }}
          value={searchValue}
        />
        <div
          onClick={() => {
            toggleSearchBar();
            setSearchValue('');
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
      <div className="search-results-container">
        {searchValue && isSearching ? (
          <span className="search-searching">Searching...</span>
        ) : searchValue && !searchResults ? (
          <span className="search-no-results">No Results</span>
        ) : searchValue && searchResults.length > 0 ? (
          searchResults.map((result, index) => {
            return (
              <SearchResult
                setSearchValue={setSearchValue}
                history={history}
                result={result}
                key={index}
              />
            );
          })
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchBar: () => dispatch(toggleSearchBar()),
  fetchSearchAsync: (searchValue) => dispatch(fetchSearchAsync(searchValue)),
  resetSearch: (booleanFalse) => dispatch(fetchSearchSuccess(booleanFalse)),
  startSearching: () => dispatch(fetchSearchStart()),
});

const mapStateToProps = ({ search }) => ({
  searchResults: search.searchResults,
  isSearching: search.isSearching,
  isSearchBarOpen: search.isSearchBarOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
