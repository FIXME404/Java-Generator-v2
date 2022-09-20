import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import java from '../../imgs/java.png';

function Navbar(props) {
  const [themeState, changeThemeState] = useState(false);
  const [hamburgerState, changeHamburgerState] = useState('');

  const handleChangingTheme = () => {
    themeState ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    return changeThemeState(state => !state);
  };

  const handleHamburgerOpen = () => {
    changeHamburgerState(() => {
      if (hamburgerState === '') {
        return 'open';
      } else {
        return '';
      }
    });
  };

  const linksArray = props.links.map(link => {
    return (
      <li key={link.id} className={styles['header__nav--links__items']}>
        <a href={link.link}>{link.name}</a>
      </li>
    );
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
        <a className={styles['header__nav--logo']} href='#footer'>
          <img className={styles['header__nav--img']} src={java} alt='Java logo' />
        </a>

        {/* Links */}
        <ul className={styles['header__nav--links']}>
          {linksArray}
          {/* <li className={styles['header__nav--links__items']}>
            <a href='#input'>Start</a>
          </li>

          <li className={styles['header__nav--links__items']}>
            <a href='#code'>About</a>
          </li>

          <li className={styles['header__nav--links__items']}>
            <a href='#code'>Code</a>
          </li>

          <li className={styles['header__nav--links__items']}>
            <a href='#footer'>Contact</a>
          </li> */}

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
