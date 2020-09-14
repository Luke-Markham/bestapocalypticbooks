import React from 'react';
const CarouselItem = ({
  activeItem,
  setActiveItem,
  index,
  book,
  handleOpenHighlight,
  handleSelectHighlightBook,
}) => {
  return (
    <div
      className={`carousel-item-master-container ${
        activeItem ? 'active-item' : ''
      }`}
    >
      <img
        onClick={() => {
          handleSelectHighlightBook(book);
          handleOpenHighlight(true);
          setActiveItem(index);
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
