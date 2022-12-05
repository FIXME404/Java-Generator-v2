import React from 'react';
import styles from './SuccessScreen.module.scss';
import Navbar from '../../components/UI/Navbar';
import Card from '../../components/UI/Card';

function SuccessScreen() {
  // Navbar prop links
  const navbarLinks = [
    { link: '/', name: 'Home' },
    { link: '/report-bug', name: 'Report Bug' }
  ];

  return (
    <section className={styles['success-section']}>
      {/* Navbar */}
      <Navbar links={navbarLinks} />

      {/* Success Card */}
      <Card>
        <div className={styles['success-section__content']}>
          {/* Success message */}
          <h1>
            Success! <i className='fa-solid fa-check'></i>
          </h1>
          {/* Submessage */}
          <h2>Your message has been sent successfully.</h2>
          <p>Thank you for your feedback!</p>

          {/* Github external link */}
          <a className='fa-brands fa-github-alt' href='https://github.com/bryan-granda' target='_blank' rel='noopener noreferrer'>
            {' '}
          </a>

          {/* Linkedin external link */}
          <a className='fa-brands fa-linkedin' href='https://www.linkedin.com/in/bryan-granda-8585b5255/' target='_blank' rel='noopener noreferrer'>
            {' '}
          </a>
        </div>
      </Card>
    </section>
  );
}

export default SuccessScreen;
