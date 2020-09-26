import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from '../carouseltem/carouselItem.component';

const RelatedCarousel = ({
  books,
  relatedSeries,
  handleSelectHighlightBook,
  handleOpenHighlight,
  setActiveItem,
  activeItem,
}) => {
  return (
    <div className="related-carousel-master-container">
      <p className="related-carousel-series">
        More in the {relatedSeries} series
      </p>
      {books ? (
        <Carousel
          responsive={{
            xxl: {
              breakpoint: {
                max: 10000,
                min: 1620,
              },
              items: 6,
              slidesToSlide: 2,
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
          className="related-carousel-container"
          itemClass="related-carousel-item-container"
          minimumTouchDrag={80}
          swipeable
          draggable
          centerMode
          customTransition="all 750ms ease-in-out"
        >
          {books.map((item, index) => {
            return (
              <img
                key={index}
                className="related-carousel-item"
                src={item.picUrl}
                alt="book cover"
              />
            );
          })}
        </Carousel>
      ) : null}
    </div>
  );
};

export default RelatedCarousel;
