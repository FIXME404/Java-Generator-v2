import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer' className={styles['footer']}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__content--left']}>
          <div className={styles['footer__content--left__contact-me']}>
            <h3>Want To Connect? Have A Comment?</h3>
            <Link to='/contact' className='fa-solid fa-envelope'></Link>
            <h2>Click Above!</h2>
          </div>

          <div className={styles['footer__content--left__follow-me']}>
            <h2>Follow Me Below!</h2>
            <a className='fa-brands fa-github-alt' href='https://github.com/FIXME404' target='_blank' rel='noopener noreferrer'>
              {' '}
            </a>

            <a className='fa-brands fa-linkedin' href='https://www.linkedin.com/in/bryan-granda-8585b5255/' target='_blank' rel='noopener noreferrer'>
              {' '}
            </a>
          </div>
        </div>
        <div className={styles['footer__content--right']}>
          <div className={styles['footer__content--right__contact-me']}>
            <h2>Found A Bug? Please Contact Me Below!</h2>
            <Link to='/report-bug' className='fa-solid fa-bug-slash'></Link>
          </div>

          <div className={styles['footer__content--right__trademark']}>
            <p>Created by: Bryan Granda</p>
            <p>© 2022 Java Code Generator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
