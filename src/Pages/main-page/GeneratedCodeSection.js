import Card from '../../components/UI/Card';
import styles from './GeneratedCodeSection.module.scss';
import { useState, useEffect } from 'react';
import GeneratedCode from '../../components/generated-code/GeneratedCode';

function GeneratedCodeSection() {
  const [wasCopied, setWasCopied] = useState(false);
  console.log(styles, 'STYLES----------------------------------------------------------------');

  const copyToClipboard = () => {
    const code = document.getElementById('generated-code').innerText;
    console.log(code);
    // code.select();
    // code.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(code);
    console.log('COPIED TO CLIPBOARD');
    setWasCopied(true);
  };

  useEffect(() => {
    if (wasCopied) {
      const timer = setTimeout(() => {
        setWasCopied(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [wasCopied]);

  const isMessageDisplayed = wasCopied ? styles['code-section__show'] : '';
  console.log(isMessageDisplayed, 'IS MESSAGE DISPLAYED');

  const clipBoardIcon = wasCopied ? <i class='fa-solid fa-check'></i> : <i class='fa-regular fa-clipboard' onClick={copyToClipboard}></i>;
  return (
    <section className={styles['code-section']}>
      <Card>
        <div className={styles['code-section__content']}>
          <div className={styles['code-section__content--code']} id='generated-code'>
            <GeneratedCode />
          </div>
          {clipBoardIcon}
          {/* <div className={styles['code-section__content--clipboard']}></div> */}
        </div>
      </Card>

      <div className={`${styles['code-section__success-message']} ${isMessageDisplayed}`}>Copied to clipboard!</div>
    </section>
  );
}

export default GeneratedCodeSection;
