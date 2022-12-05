import React from 'react';
import { useDispatch } from 'react-redux';
import { classVariablesActions } from '../../store/class-variables';
import { methodsActions } from '../../store/methods';
import styles from './AddInputFieldButton.module.scss';

// type for the props
type Props = {
  type: string;
};

// enums for the action types
enum ActionType {
  VARIABLE = 'variable',
  METHOD = 'method'
}

function AddInputFieldButton(props: Props) {
  // Dispatch for the redux store
  const dispatch = useDispatch();

  // Handles the click of the button by dispatching the addVariable or addMethod action
  const addItemHandler = () => {
    switch (props.type) {
      case ActionType.VARIABLE:
        dispatch(classVariablesActions.addVariable());
        break;
      case ActionType.METHOD:
        dispatch(methodsActions.addMethod());
        break;
    }
  };

  return <button onClick={addItemHandler} className={styles['button']} />;
}

export default AddInputFieldButton;
