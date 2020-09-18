import React from 'react';

const SearchResult = ({ result, index }) => {
  const book = (
    <>
      {result.title} - {result.author}{' '}
      {result.series ? '(' + result.series.name + ')' : null}
    </>
  );

  const author = <>{result.author} (Author)</>;
  const series = <>{result.series} (Series)</>;
  //   const genre = <>{result.tags} (genre)</>;

  return (
    <span className="search-results" key={index}>
      {result.typeOfQuery === 'title'
        ? book
        : result.typeOfQuery === 'author'
        ? author
        : result.typeOfQuery === 'series'
        ? series
        : book}
    </span>
  );
};

export default SearchResult;
