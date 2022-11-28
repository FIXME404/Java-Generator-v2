import Card from '../../components/UI/Card';
import styles from './GeneratedCodeSection.module.scss';
import { useState, useEffect } from 'react';
import HeaderCodeGenerator from '../../components/code-generators/HeaderCodeGenerator';
import GettersSettersGenerator from '../../components/code-generators/GettersSettersGenerator';
import MethodsGenerator from '../../components/code-generators/MethodsGenerator';

function GeneratedCodeSection() {
  const [wasCopied, setWasCopied] = useState(false);

  const copyToClipboard = () => {
    const code = document.getElementById('generated-code').innerText;
    navigator.clipboard.writeText(code);
    setWasCopied(true);
  };

  useEffect(() => {
    let timer;
    if (wasCopied) timer = setTimeout(() => setWasCopied(false), 1500);

    return () => clearTimeout(timer);
  }, [wasCopied]);

  const isMessageDisplayed = wasCopied ? styles['code-section__show'] : '';

  const clipBoardIcon = wasCopied ? <i className='fa-solid fa-check'></i> : <i className='fa-regular fa-clipboard' onClick={copyToClipboard}></i>;

  return (
    <section className={styles['code-section']} id='code'>
      <Card>
        <div className={styles['code-section__content']}>
          <div className={styles['code-section__content--code']} id='generated-code'>
            <HeaderCodeGenerator />
            <GettersSettersGenerator />
            <MethodsGenerator />
          </div>
          {clipBoardIcon}
        </div>
      </Card>

      <div className={`${styles['code-section__success-message']} ${isMessageDisplayed}`}>Copied to clipboard!</div>
    </section>
  );
}

export default GeneratedCodeSection;
