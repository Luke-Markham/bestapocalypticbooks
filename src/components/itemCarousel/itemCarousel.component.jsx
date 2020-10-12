import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from '../carouseltem/carouselItem.component';

const ItemCarousel = ({
  genre,
  books,
  handleSelectHighlightBook,
  handleOpenHighlight,
  setActiveItem,
  activeItem,
  isMobile,
}) => {
  return (
    <div className="item-carousel-master-container">
      <p className="item-carousel-genre">{genre}</p>
      {books ? (
        <Carousel
          responsive={{
            xxl: {
              breakpoint: {
                max: 10000,
                min: 1620,
              },
              items: 6,
              slidesToSlide: 5,
            },
            xl: {
              breakpoint: {
                max: 1620,
                min: 1370,
              },
              items: 5,
              slidesToSlide: 5,
            },

            l: {
              breakpoint: {
                max: 1370,
                min: 1080,
              },
              items: 4,
              slidesToSlide: 3, // optional, default to 1.
            },
            m: {
              breakpoint: {
                max: 1080,
                min: 810,
              },
              items: 3,
              slidesToSlide: 3, // optional, default to 1.
            },
            s: {
              breakpoint: {
                max: 810,
                min: 540,
              },
              items: 2,
              slidesToSlide: 2, // optional, default to 1.
            },
            xs: {
              breakpoint: {
                max: 500,
                min: 0,
              },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
          }}
          className="item-carousel-container"
          itemClass="carousel-item"
          minimumTouchDrag={80}
          swipeable
          draggable
          partialVisible={true}
          customTransition="all 750ms ease-in-out"
        >
          {books.map((item, index) => {
            return (
              <CarouselItem
                activeItem={activeItem === index ? true : false}
                setActiveItem={setActiveItem}
                index={index}
                key={index}
                book={item}
                handleSelectHighlightBook={handleSelectHighlightBook}
                handleOpenHighlight={handleOpenHighlight}
                isMobile={isMobile}
              />
            );
          })}
        </Carousel>
      ) : null}
    </div>
  );
};

export default ItemCarousel;
