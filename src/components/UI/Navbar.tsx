import styles from './Navbar.module.scss';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Link {
  path?: string;
  link?: string;
  name: string;
  target?: string;
  rel?: string;
}

function Navbar(props: { links: Link[] }): JSX.Element {
  // Gets the current data-theme attribute value of the root element
  const htmlTheme = document.documentElement.getAttribute('data-theme');

  // Stores the state of the theme toggle of whether it is dark or light theme
  const [themeState, changeThemeState] = useState(htmlTheme === 'dark' ? false : true);

  // Stores the state of the hamburger menu of whether it is open or not
  const [hamburgerState, changeHamburgerState] = useState('');

  // Toggles the data-theme attribute value between light and dark theme and changes the state of the theme
  const handleChangingTheme = useCallback(() => {
    themeState ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    changeThemeState(state => !state);
  }, [themeState]);

  // Toggles the hamburger menu
  const handleHamburgerOpen = () => changeHamburgerState(() => (hamburgerState === '' ? 'open' : ''));

  // Array of links that will be displayed in the navbar
  const linksArray = props.links.map((link, index) => (
    <li key={index} className={styles['header__nav--links__items']}>
      {/* If the link.path is not undefined, link will be a routing link else, link will be an anchor link */}
      {link.path !== undefined && link.path !== null ? (
        <Link to={link.path}>{link.name}</Link>
      ) : (
        <a href={link.link} target={link.target} rel={link.rel}>
          {link.name}
        </a>
      )}
    </li>
  ));

  return (
    <header className={`${styles[hamburgerState]} ${styles['header']}`}>
      {/* Hamburger Lines */}
      <div className={styles['header__menu']} onClick={handleHamburgerOpen}>
        <div className={`${styles[hamburgerState]} ${styles['header__menu--line']}`} />
      </div>

      {/* Overlay */}
      <div className={`${styles[hamburgerState]} ${styles['header__overlay']}`} onClick={handleHamburgerOpen} />

      {/* Navbar */}
      <nav className={`${styles[hamburgerState]} ${styles['header__nav']}`}>
        {/* Logo */}
        <i className='fa-solid fa-code'></i>

        {/* Links */}
        <ul className={styles['header__nav--links']}>
          {linksArray}

          {/* Dark Mode Toggler */}
          <div className={styles['header__nav--links__toggle-container']}>
            <input type='checkbox' id='toggle' name='theme' checked={themeState} onChange={handleChangingTheme} readOnly={true} />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
