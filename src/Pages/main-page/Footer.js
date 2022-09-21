import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer' className={styles['footer']}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__content--left']}>
          <div className={styles['footer__content--left__contact-me']}>
            <h2>Want to collaborate with me or have any comments?</h2>
            <NavLink to='/contact'>
              <i class='fa-solid fa-envelope'></i>
            </NavLink>
          </div>

          <div className={styles['footer__content--left__follow-me']}>
            <h2>Follow Me Below!</h2>
            <i class='fa-brands fa-github-alt'></i>
            <i class='fa-brands fa-linkedin'></i>
          </div>
        </div>
        <div className={styles['footer__content--right']}>
          <div className={styles['footer__content--right__contact-me']}>
            <h2>Found A Bug? Please Contact Me Below!</h2>
            <i class='fa-solid fa-envelope-circle-check'></i>
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
