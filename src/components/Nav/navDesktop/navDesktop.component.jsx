import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { saveNavHeightValue } from '../../../redux/nav/navActions';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo/logo.component';
import SearchBar from '../../searchBar/searchBar.component';

const NavDesktop = ({ saveNavHeightValue }) => {
  const [enableBkg, setEnableBkg] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    saveNavHeightValue(navRef.current.clientHeight);
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
  }, [saveNavHeightValue]);

  return (
    <nav
      className={`desktop-nav ${enableBkg ? 'nav-scroll-bkg' : ''} `}
      ref={navRef}
    >
      <Logo />
      <ul>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/toppicks">Top Picks</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      <SearchBar />
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveNavHeightValue: (height) => dispatch(saveNavHeightValue(height)),
});

export default connect(null, mapDispatchToProps)(NavDesktop);
