import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div id='footer' className={styles['footer']}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__content--left']}>
          <h1>Java Code Generator</h1>
          <p>Generate Java Class Code Quickly for your Project!</p>
          <NavLink to='/contact'>
            <i class='fa-solid fa-envelope'></i>
          </NavLink>
        </div>
        <div className={styles['footer__content--right']}>
          <p>© 2021 Java Code Generator</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
