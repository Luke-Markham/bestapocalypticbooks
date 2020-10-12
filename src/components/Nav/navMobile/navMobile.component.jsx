import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveNavHeightValue } from '../../../redux/nav/navActions';
import { toggleSearchBar } from '../../../redux/search/searchActions';
import { NavLink } from 'react-router-dom';
import Logo from '../../logo/logo.component';
import Search from '../../search/search.component';

import HamburgerIcon from '../../../assets/svg/hamburgerMenu.svg';
import CloseIcon from '../../../assets/svg/close.svg';

const NavMobile = ({
  saveNavHeightValue,
  toggleSearchBar,
  isSearchBarOpen,
}) => {
  const [openNav, setOpenNav] = React.useState(false);
  const navRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/home' || location.pathname.includes('/books')) {
      setTimeout(() => {
        console.log(navRef.current.clientHeight);
        saveNavHeightValue(navRef.current.clientHeight);
      }, 250);
    }
  }, [location, saveNavHeightValue]);

  return (
    <nav className="mobile-nav" ref={navRef}>
      <div className="mobile-nav-top-bar-container">
        <Logo />
        <div className="hamburger-and-search-icon-container">
          {openNav ? null : <Search />}
          {openNav ? (
            <img
              src={CloseIcon}
              className="mobile-nav-close-icon"
              alt="close navigation menu"
              onClick={() => setOpenNav(false)}
            />
          ) : !isSearchBarOpen ? (
            <img
              src={HamburgerIcon}
              className="mobile-nav-hamburger-icon"
              alt="open navigation menu"
              onClick={() => setOpenNav(true)}
            />
          ) : null}
        </div>
      </div>
      {openNav ? (
        <div className="mobile-nav-contents-container">
          <ul>
            <NavLink onClick={() => setOpenNav(false)} to="/home">
              Home
            </NavLink>
            <NavLink onClick={() => setOpenNav(false)} to="/toppicks">
              Top Picks
            </NavLink>
            <NavLink onClick={() => setOpenNav(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setOpenNav(false)} to="/contact">
              Contact
            </NavLink>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isSearchBarOpen: state.search.isSearchBarOpen,
});

const mapDispatchToProps = (dispatch) => ({
  saveNavHeightValue: (height) => dispatch(saveNavHeightValue(height)),
  toggleSearchBar: () => dispatch(toggleSearchBar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMobile);
