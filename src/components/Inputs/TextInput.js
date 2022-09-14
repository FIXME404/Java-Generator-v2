import { useState } from 'react';
import styles from './TextInput.module.scss';

function TextInput(props) {
  const [inputText, setInputText] = useState('');

  const handleTextChange = event => setInputText(prevState => event.target.value);

  const handleChange = () => {
    if (inputText.trim().length !== 0) {
      props.updateMethod(inputText, props.name);
    }
  };
  return (
    <div className={styles['text-input']}>
      <input
        id={props.name}
        type='text'
        value={inputText}
        onChange={handleTextChange}
        onBlur={handleChange}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export default TextInput;
