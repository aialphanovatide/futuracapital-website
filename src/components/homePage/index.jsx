import React, { useEffect, useState, useRef} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './homePage.css';
import '@splidejs/react-splide/css';
import PageOne from '../pageOne';
import PageTwo from '../pageTwo';
import PageThree from '../pageThree';
import PageFour from '../pageFour';
import PageFive from '../pageFive';
import PageSix from '../pageSix';
import PageSeven from '../pageSeven';
import logo from "../../img/logo_desktop.svg"
import logo_mobile from "../../img/Futura Capital Logo White.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { Pagination } from '@mui/material';

function HomePage() {
  const [slideIndex, setSlideIndex]= useState(0)
  const splideRef = useRef(null);
  const navRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(slideIndex);}
  }, [(slideIndex)]);

  useEffect(() => {
    setSlideIndex(currentIndex)
  }, [(currentIndex)]);
    
  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
  }

  const getNavItemClass = (index) => {

      return slideIndex === index ? 'nav_item_active' : 'nav_item';
  }

  const changeSlideIndex = (index) => {
    setSlideIndex(index)
    showNavbar()
  }

  


  return (
    <div>
      <span className='pagination_background'></span>
      <div className='navbar'>
            <div className='navbar_container'>
                <img src={logo} alt="" className='nav_logo desktop' />
                <img src={logo_mobile} alt="" className='nav_logo mobile' />
                <div ref={navRef} className="nav_items responsive_nav">
                    <span onClick={() => changeSlideIndex(0)} className={getNavItemClass(0)}>Home</span>
                    <span onClick={() => changeSlideIndex(1)} className={getNavItemClass(1)}>About Us</span>
                    <span onClick={() => changeSlideIndex(2)} className={getNavItemClass(2)}>Core Values</span>
                    <span onClick={() => changeSlideIndex(3)} className={getNavItemClass(3)}>Our Services</span>
                    <span onClick={() => changeSlideIndex(4)} className={getNavItemClass(4)}>USP</span>
                    <span onClick={() => changeSlideIndex(5)} className={getNavItemClass(5)}>Why Choose Us?</span>
                    <span onClick={() => changeSlideIndex(6)} className={getNavItemClass(6)}>Contact Us</span>
                </div>
                <button className="nav_toggle" onClick={showNavbar}>
                    <MenuIcon sx={{ color: 'white' }} />
                </button>
            </div>
        </div>
      <div className='slide_container'>
      <Splide ref={splideRef} options={{
          type: 'loop',
          perPage: 1,
          autoHeight: true,
          height: 'auto',
          width: '100%',
        }}
        onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
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
    </div>
  )
}

export default HomePage
