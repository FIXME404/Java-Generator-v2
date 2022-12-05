import React from 'react';
import { useDispatch } from 'react-redux';
import { classVariablesActions } from '../../store/class-variables';
import { methodsActions } from '../../store/methods';
import styles from './RemoveInputFieldButton.module.scss';

// type for props
type RemoveInputFieldButtonProps = {
  type: string;
  id: string;
};

function RemoveInputField(props: RemoveInputFieldButtonProps) {
  // Dispatch for the redux store
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    // If props.type is 'variable', dispatch classVariablesActions.removeVariable that removes the variable with props.id
    props.type === 'variable' && dispatch(classVariablesActions.removeVariable(props.id));
    // If props.type is 'method', dispatch methodsActions.removeMethod that removes the method with the id of props.id
    props.type === 'method' && dispatch(methodsActions.removeMethod(props.id));
  };

  return <button onClick={removeItemHandler} className={styles['delete-btn']} />;
}

export default RemoveInputField;
