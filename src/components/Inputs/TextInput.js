import { memo } from 'react';
import styles from './TextInput.module.scss';

const TextInput = props => {
  // console.log('TEXT INPUT RENDERED');

  const handleChange = event => {
    const enteredText = event.target.value;
    if (enteredText.trim().length > 0) props.updateMethod(enteredText, props.name);
  };

  return (
    <div className={styles['text-input']}>
      <input type='text' id={props.name} placeholder={props.placeholder} onBlur={handleChange} />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default memo(TextInput);
