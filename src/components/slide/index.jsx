import React, {useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slide.css';
import PageOne from '../pageOne';
import PageTwo from '../pageTwo';
import PageThree from '../pageThree';
import PageFour from '../pageFour';
import PageFive from '../pageFive';
import PageSix from '../pageSix';
import PageSeven from '../pageSeven';

const Slide = ({ slideIndex, setSlideIndex }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    console.log('go to slide', slideIndex);
    if (splideRef.current) {
      splideRef.current.go(slideIndex);
    }
  }, [slideIndex]);

  // Sincronizar el estado con la diapositiva activa
  return (
    <div className='slide_container'>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoHeight: true,
          height: 'auto',
          width: '100%',
          ref: {splideRef},
        }}
        >
        <SplideSlide className="splide-slide is-active">
          <PageOne />
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <PageTwo />
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <PageThree />
        </SplideSlide >
        <SplideSlide className="splide-slide">
          <PageFour />
        </SplideSlide >
        <SplideSlide className="splide-slide">
          <PageFive />
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <PageSix />
        </SplideSlide>
        <SplideSlide className="splide-slide">
          <PageSeven />
        </SplideSlide>
      </Splide>
      <p className='copyright'>© 2024 by Novatide Labs</p>
    </div>
  );
};

export default Slide;
