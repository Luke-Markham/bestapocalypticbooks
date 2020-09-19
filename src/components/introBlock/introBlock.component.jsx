import React from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import FullBook from '../fullBook/fullBook.component';
import downArrow from '../../assets/svg/down-arrow.svg';

const ScrollLink = Link;

const IntroBlock = ({ featureBookIsFetching, featuredBook, navHeight }) => {
  return (
    <Fade>
      <header className="intro-block-container">
        <FullBook isFetching={featureBookIsFetching} book={featuredBook} />
        <ScrollLink
          to="home-page-carousels"
          smooth={true}
          duration={500}
          offset={-navHeight}
        >
          <img
            src={downArrow}
            alt="down arrow"
            className="intro-block-down-arrow"
          />
        </ScrollLink>
      </header>
    </Fade>
  );
};

const mapStateToProps = ({ featuredBook, nav }) => ({
  featuredBook: featuredBook.featuredBook,
  featureBookIsFetching: featuredBook.isFetching,
  navHeight: nav.height,
});

export default connect(mapStateToProps, null)(IntroBlock);
