import styles from './Navbar.module.scss';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const htmlTheme = document.documentElement.getAttribute('data-theme');
  const [themeState, changeThemeState] = useState(htmlTheme === 'dark' ? false : true);
  const [hamburgerState, changeHamburgerState] = useState('');

  const handleChangingTheme = useCallback(() => {
    themeState ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    return changeThemeState(state => !state);
  }, [themeState]);

  const handleHamburgerOpen = () => {
    changeHamburgerState(() => {
      if (hamburgerState === '') {
        return 'open';
      } else {
        return '';
      }
    });
  };

  const linksArray = props.links.map((link, index) => {
    if (link.path !== undefined && link.path !== null) {
      return (
        <li key={index} className={styles['header__nav--links__items']}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={index} className={styles['header__nav--links__items']}>
          <a href={link.link} target={link.target} rel={link.rel}>
            {link.name}
          </a>
        </li>
      );
    }
  });

  return (
    <header className={`${styles[hamburgerState]} ${styles['header']}`}>
      {/* Hamburger Lines */}
      <div className={styles['header__menu']} onClick={() => handleHamburgerOpen()}>
        <div className={`${styles[hamburgerState]} ${styles['header__menu--line']}`} />
      </div>

      {/* Overlay */}
      <div className={`${styles[hamburgerState]} ${styles['header__overlay']}`} onClick={() => handleHamburgerOpen()} />

      {/* Navbar */}
      <nav className={`${styles[hamburgerState]} ${styles['header__nav']}`}>
        {/* Logo */}
        <i className='fa-solid fa-code'></i>

        {/* Links */}
        <ul className={styles['header__nav--links']}>
          {linksArray}
          {/* Dark Mode Toggler */}
          <div className={styles['header__nav--links__toggle-container']}>
            <input type='checkbox' id='toggle' name='theme' value={themeState} checked={themeState} onChange={() => handleChangingTheme()} />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
