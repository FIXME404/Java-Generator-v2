import { useState } from 'react';
import styles from './Checkbox.module.scss';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    props.updateCheckbox(isChecked, props.name);
  };

  return (
    <div className={styles.checkbox}>
      <label>{props.label}</label>
      <input
        type='checkbox'
        name={props.name}
        checked={isChecked}
        onKeyPress={handleChange}
        onChange={handleChange}
      />
    </div>
  );
}

export default Checkbox;
