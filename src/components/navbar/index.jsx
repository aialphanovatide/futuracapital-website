import './navbar.css'
import React, { useRef } from 'react'
import logo from "../../img/logo_desktop.svg"
import logo_mobile from "../../img/Futura Capital Logo White.svg"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ slideIndex, setSlideIndex }) => {
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const getNavItemClass = (index) => {

        return slideIndex === index ? 'nav_item_active' : 'nav_item';
    }

    return (
        <div className='navbar'>
            <div className='navbar_container'>
                <img src={logo} alt="" className='nav_logo desktop' />
                <img src={logo_mobile} alt="" className='nav_logo mobile' />
                <div ref={navRef} className="nav_items responsive_nav">
                    <span onClick={() => setSlideIndex(0)} className={getNavItemClass(0)}>Home</span>
                    <span onClick={() => setSlideIndex(1)} className={getNavItemClass(1)}>About Us</span>
                    <span onClick={() => setSlideIndex(2)} className={getNavItemClass(2)}>Core Values</span>
                    <span onClick={() => setSlideIndex(3)} className={getNavItemClass(3)}>Our Services</span>
                    <span onClick={() => setSlideIndex(4)} className={getNavItemClass(4)}>USP</span>
                    <span onClick={() => setSlideIndex(5)} className={getNavItemClass(5)}>Why Choose Us?</span>
                    <span onClick={() => setSlideIndex(6)} className={getNavItemClass(6)}>Contact Us</span>
                </div>
                <button className="nav_toggle" onClick={showNavbar}>
                    <MenuIcon sx={{ color: 'white' }} />
                </button>
            </div>
        </div>
    )
}

export default Navbar;
