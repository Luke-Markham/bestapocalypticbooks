import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchSearchAsync,
  fetchSearchSuccess,
  fetchSearchStart,
} from '../../redux/search/searchActions';
import SearchIcon from '../../assets/svg/search.svg';
import CloseIcon from '../../assets/svg/close.svg';

const SearchBar = ({
  fetchSearchAsync,
  resetSearch,
  startSearching,
  searchResults,
  isSearching,
}) => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [typingTimer, setTypingTimer] = useState();

  function handleChange(e) {
    setSearchValue(e.target.value);
    startSearching();
  }

  function handleSearchIconClick() {
    if (openSearchInput === false) {
      setOpenSearchInput(true);
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        {openSearchInput ? null : (
          <div
            onClick={() => handleSearchIconClick()}
            className={`search-bar-icon-container ${
              openSearchInput ? 'search-bar-icon-bkg' : ''
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
            openSearchInput ? 'search-bar-input-open' : ''
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
            setOpenSearchInput(false);
            setSearchValue('');
          }}
          className={`search-bar-icon-container ${
            openSearchInput ? 'search-bar-icon-bkg' : ''
          }`}
        >
          <img
            src={CloseIcon}
            alt="Close Icon"
            className={`search-bar-search-close ${
              openSearchInput ? 'search-bar-search-close-show' : ''
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
              <span className="search-results" key={index}>
                {result.title} - {result.author}{' '}
                {result.series ? '(' + result.series.name + ')' : null}
              </span>
            );
            {
              /* return <SearchResult result={result} index={index} />; */
            }
          })
        ) : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSearchAsync: (searchValue) => dispatch(fetchSearchAsync(searchValue)),
  resetSearch: (searchResults) => dispatch(fetchSearchSuccess(searchResults)),
  startSearching: () => dispatch(fetchSearchStart()),
});

const mapStateToProps = ({ search }) => ({
  searchResults: search.searchResults,
  isSearching: search.isSearching,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
