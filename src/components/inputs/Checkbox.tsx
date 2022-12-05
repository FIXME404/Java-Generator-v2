import React, { useState } from 'react';
import styles from './Checkbox.module.scss';

// Type for the updateCheckbox prop
type Props = {
  label: string;
  name: string;
  updateCheckbox: (isChecked: boolean, name: string) => void;
};

// Type for the event object
type EventTargetValue = {
  key: string;
};

function Checkbox(props: Props) {
  // State for the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handles the change of the checkbox by calling the updateCheckbox method that was passed in as a prop
  const handleOnKeyPress = (event: EventTargetValue) => {
    if (event.key === 'Enter') {
      setIsChecked(prevState => !prevState);
      props.updateCheckbox(isChecked, props.name);
    }
  };

  // Handles the change of the checkbox by calling the updateCheckbox method that was passed in as a prop
  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    props.updateCheckbox(isChecked, props.name);
  };

  return (
    <div className={styles.checkbox}>
      {/* Checkbox label */}
      <label>{props.label}</label>

      {/* Checkbox */}
      <input type='checkbox' name={props.name} checked={isChecked} onKeyPress={handleOnKeyPress} onChange={handleChange} />
    </div>
  );
}

export default Checkbox;
