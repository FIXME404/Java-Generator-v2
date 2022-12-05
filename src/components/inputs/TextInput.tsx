import React, { memo } from 'react';
import styles from './TextInput.module.scss';

// Type for the updateMethod prop
type updateMethodType = (arg1: string, arg2: string) => void;

// Type for the event.target.value
type eventTargetValue = { target: { value: string } };

// Interface for the props
interface TextInputProps {
  updateMethod: updateMethodType;
  name: string;
  placeholder: string;
  label: string;
}

const TextInput = (props: TextInputProps) => {
  // Handles the change of the input field by calling the updateMethod that was passed in as a prop
  const handleChange = (event: eventTargetValue) => event.target.value.trim().length > 0 && props.updateMethod(event.target.value, props.name);

  return (
    <div className={styles['text-input']}>
      {/* Input field */}
      <input type='text' id={props.name} placeholder={props.placeholder} onBlur={handleChange} />

      {/* Label */}
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default memo(TextInput);
