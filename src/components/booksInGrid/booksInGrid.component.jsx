import React from 'react';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

const BooksInGrid = ({ books }) => {
  return (
    <div className="books-in-grid-container">
      {books.map((book, index) => {
        return (
          <LazyLoad key={index} offset={50} once>
            <Fade duration={1000}>
              <div className="books-in-grid-book-container">
                <img
                  alt="cover of book"
                  src={book.picUrl}
                  className="books-in-grid-book-img"
                />
              </div>
            </Fade>
          </LazyLoad>
        );
      })}
    </div>
  );
};

export default BooksInGrid;
