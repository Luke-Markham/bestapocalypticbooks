import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveNavHeightValue } from '../../../redux/nav/navActions';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo/logo.component';
import Search from '../../search/search.component';

const NavDesktop = ({ saveNavHeightValue }) => {
  const [enableBkg, setEnableBkg] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home' || location.pathname.includes('/books')) {
      setTimeout(() => {
        console.log(navRef.current.clientHeight);
        saveNavHeightValue(navRef.current.clientHeight);
      }, 250);
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY !== 0) {
        setEnableBkg(true);
      } else if (window.screenY === 0) {
        setEnableBkg(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, [location, saveNavHeightValue]);

  return (
    <nav
      className={`desktop-nav ${enableBkg ? ' nav-scroll-bkg' : ''} `}
      ref={navRef}
    >
      <Logo />
      <ul>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/toppicks">Top Picks</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
      <Search />
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveNavHeightValue: (height) => dispatch(saveNavHeightValue(height)),
});

export default connect(null, mapDispatchToProps)(NavDesktop);
