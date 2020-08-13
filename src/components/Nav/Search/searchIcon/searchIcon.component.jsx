import React from 'react';
import './searchIcon.styles.scss';
import SearchIcon from '../../../../assets/svg/search.svg';

const Search = () => {
  return (
    <div className="search-icon-container">
      <img src={SearchIcon} alt="Search Icon" className="search-icon" />
    </div>
  );
};

export default Search;
