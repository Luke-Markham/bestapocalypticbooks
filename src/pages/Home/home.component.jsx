import React from 'react';
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import IntroBlock from '../../components/introBlock/introBlock.component';
import CarouselAndHighlight from '../../components/carouselAndHighlight/carouselAndHighlight.component';

const ScrollElement = Element;

const Home = () => {
  return (
    <section className="home-container">
      <IntroBlock />
      <ScrollElement name="home-page-carousels">
        <div className="testp">
          <LazyLoad offset={50} once>
            <Fade>
              <CarouselAndHighlight genre="undead" />
            </Fade>
          </LazyLoad>

          <LazyLoad offset={50} once>
            <Fade>
              <CarouselAndHighlight genre="post pandemic" />
            </Fade>
          </LazyLoad>

          <LazyLoad offset={50} once>
            <Fade>
              <CarouselAndHighlight genre="classic" />
            </Fade>
          </LazyLoad>
        </div>
      </ScrollElement>
    </section>
  );
};

export default Home;
