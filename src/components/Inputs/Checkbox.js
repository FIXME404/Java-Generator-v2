import { useState } from 'react';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prevState => !prevState);
    props.updateCheckbox(isChecked, props.name);
  };

  return (
    <>
      <label>{props.label}</label>
      <input
        type='checkbox'
        name={props.name}
        checked={isChecked}
        onKeyPress={handleChange}
        onChange={handleChange}
      />
    </>
  );
}

export default Checkbox;
