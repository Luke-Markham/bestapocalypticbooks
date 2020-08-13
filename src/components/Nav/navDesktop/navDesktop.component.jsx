import React from 'react';
import './navDesktop.styles.scss';
import Search from '../Search/searchIcon/searchIcon.component';

const NavDesktop = () => {
  return (
    <nav className="desktop-nav">
      <div className="nav-logo">ApocBooks</div>
      <ul>
        <li>Home</li>
        <li>Home2</li>
        <li>Home3</li>
        <li>Home4</li>
        <li>Contact</li>
      </ul>
      <Search />
    </nav>
  );
};

export default NavDesktop;
