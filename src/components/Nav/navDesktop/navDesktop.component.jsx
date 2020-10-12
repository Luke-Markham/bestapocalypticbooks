import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveNavHeightValue } from '../../../redux/nav/navActions';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo/logo.component';
import Search from '../../search/search.component';

const NavDesktop = ({ saveNavHeightValue }) => {
  const [enableBkg, setEnableBkg] = React.useState(false);
  const navRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/home' || location.pathname.includes('/books')) {
      setTimeout(() => {
        console.log(navRef.current.clientHeight);
        saveNavHeightValue(navRef.current.clientHeight);
      }, 250);
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY !== 0) {
        setEnableBkg(true);
      } else {
        setEnableBkg(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <nav
      className={`${enableBkg ? 'desktop-nav nav-scroll-bkg' : 'desktop-nav'}`}
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
