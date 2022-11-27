import styles from './ScrollToTopButton.module.scss';
import { useState } from 'react';

function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);
  window.onscroll = () => setShowScroll(window.scrollY > 200);
  return (
    <div className={showScroll ? styles.scroll : styles.hide}>
      <a href='#header'>
        <i className='fa-solid fa-arrow-up'></i>
      </a>
    </div>
  );
}

export default ScrollToTopButton;
