import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/ClearXLogo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  } )
},[]);

const [mobileMenu, setMobileMenu] = useState(false);
const menuRef = useRef(null);
const menuIconRef = useRef(null);

const openMenu = (event) => {
  event.stopPropagation();
  setMobileMenu(true);
}

const closeMenu = () => {
  setMobileMenu(false);
}

useEffect(() => {
  const handleClickOutside = (event) => {
    if (mobileMenu && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        menuIconRef.current && 
        !menuIconRef.current.contains(event.target)) {
      closeMenu();
    }
  }

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  }
}, [mobileMenu]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'} ref={menuRef}>
            <li><Link to='hero' smooth={true} offset={-320} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-340} duration={500}>About</Link></li>
            <li><Link to='services' smooth={true} offset={-320} duration={500}>Services</Link></li>
            <li><Link to='pricing' smooth={true} offset={-320} duration={500}>Pricing</Link></li>
            <li><Link to='reviews' smooth={true} offset={-320} duration={500}>Reviews</Link></li>
            <li><Link to='contact' smooth={true} offset={-320} duration={500} className='btn'>Contact US</Link></li>
        </ul>
        <img 
          src={menu_icon} 
          alt="" 
          className='menu-icon' 
          onClick={mobileMenu ? closeMenu : openMenu}
          ref={menuIconRef}
        />
    </nav>
  )
}

export default Navbar