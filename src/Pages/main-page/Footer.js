import styles from './Footer.module.scss';

function Footer() {
  return (
    <div id='footer' className={styles['footer']}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__content--left']}>
          <div className={styles['footer__content--left__contact-me']}>
            <h3>Want To Connect? Have A Comment?</h3>
            <a className='fa-solid fa-envelope' href='https://portfolio-bryan-granda.vercel.app/' target='_blank' rel='noopener noreferrer'>
              {' '}
            </a>
            <h2>Click Above!</h2>
          </div>

          <div className={styles['footer__content--left__follow-me']}>
            <h2>Follow Me Below!</h2>
            <a className='fa-brands fa-github-alt' href='https://github.com/bryan-granda' target='_blank' rel='noopener noreferrer'>
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
            <a className='fa-solid fa-bug-slash' href='https://portfolio-bryan-granda.vercel.app/' target='_blank' rel='noopener noreferrer'>
              {' '}
            </a>
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
