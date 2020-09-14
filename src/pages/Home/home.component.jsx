import React from 'react';
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
          <CarouselAndHighlight genre="undead" />
          <CarouselAndHighlight genre="post pandemic" />
          <CarouselAndHighlight genre="classic" />
        </div>
      </ScrollElement>
    </section>
  );
};

export default Home;
