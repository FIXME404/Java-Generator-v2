import React from 'react';
import Logo from '../../imgs/Logo.png';
import styles from './ShowcaseSection.module.scss';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Navbar from '../../components/UI/Navbar';

function ShowcaseSection() {
  const links = [
    { link: '#input', name: 'Start' },
    { link: '#about', name: 'Documentation' },
    { link: '#footer', name: 'About' },
    { link: 'https://portfolio-bryan-granda.vercel.app/', name: 'Contact Me', target: '_blank', rel: 'noopener noreferrer' }
  ];

  return (
    <section id='showcase' className={styles.showcase}>
      <div className={styles['showcase__navbar']}>
        <Navbar links={links} />
      </div>

      <div className={styles['showcase__content']}>
        <div className={styles['showcase__content--heading']}>
          {/* Heading */}
          <h1>
            Java Code Generator<p>|</p>
          </h1>
        </div>

        <div className={styles['showcase__content--subheading']}>
          <div className={styles['showcase__content--subheading__content']}>
            {/* Subheading */}
            <h2>Generate Java Class Code Quickly for your Project!</h2>

            {/* Get Started Button */}
            <a href='#input'>GET STARTED</a>

            {/* Bookmark Reminder */}
            <h3>
              Don't forget to{' '}
              <strong>
                BOOKMARK
                <BookmarkIcon />
              </strong>{' '}
              this website!
            </h3>
          </div>

          {/* Logo */}
          <div className={styles['showcase__content--subheading__logo']}>
            <img src={Logo} alt='Logo' height={'250'} width={'400'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
