import React, { useState } from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import CloseIcon from '../../assets/svg/close.svg';

const SearchBar = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearchIconClick() {
    if (openSearchInput === false) {
      setOpenSearchInput(true);
    } else if (searchValue.length > 0) {
      console.log('hasASearch');
    }
  }

  return (
    <div className="search-bar-container">
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
      <input
        className={`search-bar-input ${
          openSearchInput ? 'search-bar-input-open' : ''
        }`}
        type="text"
        placeholder="e.g World War Z  "
        onChange={(e) => handleChange(e)}
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
  );
};

export default SearchBar;
