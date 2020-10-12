import React from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { fetchCarouselBooksAsync } from '../../redux/carousel/carouselActions';
import { motion, AnimatePresence } from 'framer-motion';
import Highlight from '../highlight/highlight.component';
import ItemCarousel from '../itemCarousel/itemCarousel.component';

const CarouselAndHighlight = ({
  genre,
  fetchCarouselBooksAsync,
  carouselBooks,
}) => {
  const [highlightBook, setHighlightBook] = React.useState(false);
  const [openHighlight, setOpenHighlight] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(false);
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });

  function handleSelectHighlightBook(book) {
    setHighlightBook(false);
    setHighlightBook(book);
  }

  React.useEffect(() => {
    fetchCarouselBooksAsync(genre);
  }, [fetchCarouselBooksAsync, genre]);

  return (
    <>
      {!carouselBooks[genre] ? null : (
        <div>
          <ItemCarousel
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            genre={genre}
            books={carouselBooks[genre]}
            handleSelectHighlightBook={handleSelectHighlightBook}
            handleOpenHighlight={setOpenHighlight}
            isMobile={isMobile}
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
                        isMobile={isMobile}
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
