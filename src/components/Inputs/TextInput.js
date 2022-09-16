import { useState } from 'react';
import styles from './TextInput.module.scss';

function TextInput(props) {
  const [inputText, setInputText] = useState('');

  const handleTextChange = event => setInputText(prevState => event.target.value);

  const handleChange = () => {
    console.log('THIS IS RUNNING', inputText.trim().length !== 0);
    if (inputText.trim().length !== 0) {
      console.log(inputText, props.name);
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
