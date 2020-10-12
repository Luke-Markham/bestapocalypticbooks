import React from 'react';

const SearchResult = ({
  handleSearchResultSelection,
  result,
  index,
  cursorPosition,
}) => {
  const book = (
    <span
      className={`search-result ${
        cursorPosition === index ? 'search-result-active' : ''
      }`}
      onClick={() => handleSearchResultSelection(result)}
      onKeyDown={(e) => {
        console.log(e);
      }}
    >
      {result.title} - {result.author}{' '}
      {result.series && result.series.name.length > 0
        ? '(' + result.series.name + ')'
        : null}
    </span>
  );

  const author = (
    <span
      className={`search-result ${
        cursorPosition === index ? 'search-result-active' : ''
      }`}
      onClick={() => handleSearchResultSelection(result)}
    >
      {result.author} (Author)
    </span>
  );
  const series = (
    <span
      className={`search-result ${
        cursorPosition === index ? 'search-result-active' : ''
      }`}
      onClick={() => handleSearchResultSelection(result)}
    >
      {result.series} (Series)
    </span>
  );
  const genre = (
    <span
      className={`search-result ${
        cursorPosition === index ? 'search-result-active' : ''
      }`}
      onClick={() => handleSearchResultSelection(result)}
    >
      {result.genre} (genre)
    </span>
  );

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

export default SearchResult;
