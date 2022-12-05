import React from 'react';
import styles from './PageNotFound.module.scss';
import Navbar from '../../components/UI/Navbar';

function PageNotFound() {
  //Navbar links
  const navbarLinks = [
    { path: '/', name: 'Home' },
    { path: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['section']}>
      {/* Navbar */}
      <Navbar links={navbarLinks} />

      {/* Content */}
      <div className={styles['section__content']}>
        {/* Title: 404 Page Not Found */}
        <h1>404</h1>
        <h2>Page Not Found</h2>

        {/* Description */}
        <p>Sorry, the page you are looking for does not exist.</p>

        {/* Logo */}
        <i className='fa-solid fa-code'></i>
      </div>
    </section>
  );
}

export default PageNotFound;
