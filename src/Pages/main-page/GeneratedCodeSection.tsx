import React from 'react';
import Card from '../../components/UI/Card';
import styles from './GeneratedCodeSection.module.scss';
import { useState, useEffect } from 'react';
import HeaderCodeGenerator from '../../components/code-generators/HeaderCodeGenerator';
import GettersSettersGenerator from '../../components/code-generators/GettersSettersGenerator';
import MethodsGenerator from '../../components/code-generators/MethodsGenerator';

type getElementById = (id: string) => HTMLElement | null;

function GeneratedCodeSection() {
  // useState to determined if the code was copied or not
  const [wasCopied, setWasCopied] = useState(false);

  // Copy function that copies the inner HTML to the clipboard
  const copyToClipboard = () => {
    let innerHTML = '';
    const code = document.getElementById('generated-code');

    code !== null && (innerHTML += code.innerHTML);
    navigator.clipboard.writeText(innerHTML);
    setWasCopied(true);
  };

  // useEffect to set the wasCopied state to false after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (wasCopied) timer = setTimeout(() => setWasCopied(false), 1500);

    return () => clearTimeout(timer);
  }, [wasCopied]);

  // If the code was copied, display the copied message and its checkmark icon
  const isMessageDisplayed = wasCopied ? styles['code-section__show'] : '';
  const clipBoardIcon = wasCopied ? <i className='fa-solid fa-check'></i> : <i className='fa-regular fa-clipboard' onClick={copyToClipboard}></i>;

  return (
    <section className={styles['code-section']} id='code'>
      <Card>
        <div className={styles['code-section__content']}>
          {/* Generated Code */}
          <div className={styles['code-section__content--code']} id='generated-code'>
            <HeaderCodeGenerator />
            <GettersSettersGenerator />
            <MethodsGenerator />
          </div>
          {/* Copy Button */}
          {clipBoardIcon}
        </div>
      </Card>

      {/* Copied Message */}
      <div className={`${styles['code-section__success-message']} ${isMessageDisplayed}`}>Copied to clipboard!</div>
    </section>
  );
}

export default GeneratedCodeSection;
