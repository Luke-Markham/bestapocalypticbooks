import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBookPageBookSuccess } from '../../redux/bookPage/bookPageActions';
import { toggleSearchBar } from '../../redux/search/searchActions';
import { dashlize } from '../../utilities/funcs';

const SearchResult = ({
  result,
  clearPreviousBookPagBookState,
  pushBookToBookPageState,
  toggleSearchBar,
  setSearchValue,
  history,
}) => {
  const handleTitleClick = async () => {
    await clearPreviousBookPagBookState(null);
    history.push(`/books/${dashlize(result.title)}`);
    pushBookToBookPageState(result);
    toggleSearchBar();
    setSearchValue('');
  };
  const book = (
    <span className="search-result" onClick={() => handleTitleClick()}>
      {result.title} - {result.author}{' '}
      {result.series ? '(' + result.series.name + ')' : null}
    </span>
  );

  const author = (
    <span className="search-result">{result.author} (Author)</span>
  );
  const series = (
    <span className="search-result">{result.series} (Series)</span>
  );
  const genre = <span className="search-result">{result.genre} (genre)</span>;

  return (
    <>
      {result.typeOfQuery === 'genre'
        ? genre
        : result.typeOfQuery === 'author'
        ? author
        : result.typeOfQuery === 'series'
        ? series
        : book}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearPreviousBookPagBookState: (clearValue) =>
    dispatch(fetchBookPageBookSuccess(clearValue)),
  pushBookToBookPageState: (book) => dispatch(fetchBookPageBookSuccess(book)),
  toggleSearchBar: () => dispatch(toggleSearchBar()),
});

export default connect(null, mapDispatchToProps)(SearchResult);
