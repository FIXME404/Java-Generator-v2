import styles from './ScrollToTopButton.module.scss';
import React, { useState } from 'react';

function ScrollToTopButton() {
  // State for the visibility of the button
  const [showScroll, setShowScroll] = useState(false);

  // Handles the scroll event by setting the showScroll state to true if the scroll position is greater than 200
  window.onscroll = () => setShowScroll(window.scrollY > 200);
  return (
    <div className={showScroll ? styles.scroll : styles.hide}>
      {/* onClick scrolls to the top of the page */}
      <a href='#header'>
        <i className='fa-solid fa-arrow-up'></i>
      </a>
    </div>
  );
}

export default ScrollToTopButton;
