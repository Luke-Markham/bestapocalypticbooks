import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCarouselBooksAsync } from '../../redux/carousel/carouselActions';
import Highlight from '../highlight/highlight.component';
import ItemCarousel from '../itemCarousel/itemCarousel.component';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselAndHighlight = ({
  genre,
  fetchCarouselBooksAsync,
  carouselBooks,
}) => {
  const [highlightBook, setHighlightBook] = useState(false);
  const [openHighlight, setOpenHighlight] = useState(false);
  const [activeItem, setActiveItem] = useState(false);

  function handleSelectHighlightBook(book) {
    setHighlightBook(false);
    setHighlightBook(book);
  }

  useEffect(() => {
    fetchCarouselBooksAsync(genre);
  }, [fetchCarouselBooksAsync, genre]);

  return (
    <>
      {!carouselBooks[genre] ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <ItemCarousel
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            genre={genre}
            books={carouselBooks[genre]}
            handleSelectHighlightBook={handleSelectHighlightBook}
            handleOpenHighlight={setOpenHighlight}
          />

          <AnimatePresence exitBeforeEnter>
            {openHighlight && (
              <motion.div
                key={genre}
                transition={{ duration: 0.7 }}
                initial={{ maxHeight: '0px', overflow: 'hidden', opacity: 0 }}
                animate={{
                  maxHeight: '1500px',
                  overflow: 'hidden',
                  opacity: 1,
                }}
                exit={{ maxHeight: '0px', overflow: 'hidden', opacity: 0 }}
              >
                <AnimatePresence exitBeforeEnter>
                  {highlightBook && (
                    <motion.div
                      key={highlightBook.title}
                      transition={{ duration: 0.7 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Highlight
                        book={highlightBook}
                        handleSelectHighlightBook={setHighlightBook}
                        handleOpenHighlight={setOpenHighlight}
                        setActiveItem={setActiveItem}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ carouselBooks }) => ({
  carouselBooks: carouselBooks,
  carouselBooksAreFetching: carouselBooks.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCarouselBooksAsync: (genre) => dispatch(fetchCarouselBooksAsync(genre)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselAndHighlight);
