import { useState } from 'react';
import styles from './Checkbox.module.scss';

function Checkbox(props) {
  console.log('CHECKBOX RENDERED');
  const [isChecked, setIsChecked] = useState(false);

  const handleOnKeyPress = event => {
    if (event.key === 'Enter') {
      setIsChecked(prevState => !prevState);
    }
    props.updateCheckbox(isChecked, props.name);
  };

  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    props.updateCheckbox(isChecked, props.name);
  };

  return (
    <div className={styles.checkbox}>
      <label>{props.label}</label>
      <input type='checkbox' name={props.name} checked={isChecked} onKeyPress={handleOnKeyPress} onChange={handleChange} />
    </div>
  );
}

export default Checkbox;
