import React from 'react';
const CarouselItem = ({
  activeItem,
  setActiveItem,
  index,
  book,
  handleOpenHighlight,
  handleSelectHighlightBook,
  isMobile,
}) => {
  function handleSelectItem(book, index) {
    handleSelectHighlightBook(book);
    handleOpenHighlight(true);
    if (!isMobile) {
      setActiveItem(index);
    }
  }

  return (
    <div
      className={`carousel-item-master-container ${
        activeItem ? 'active-item' : ''
      }`}
    >
      <img
        onClick={() => {
          handleSelectItem(book, index);
        }}
        className="carousel-item-img"
        src={book.picUrl}
        alt="cover of book"
        draggable="false"
      ></img>
    </div>
  );
};

export default CarouselItem;
