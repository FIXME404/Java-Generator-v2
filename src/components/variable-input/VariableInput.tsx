import styles from './VariableInput.module.scss';
import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { classVariablesActions } from '../../store/class-variables';
import TextInput from '../inputs/TextInput';
import Checkbox from '../inputs/Checkbox';
import RemoveInputFieldButton from '../buttons/RemoveInputFieldButton';

// Initial state
const initialState = { type: '', name: '', includesGetter: false, includesSetter: false };

// Type for the props
type Props = {
  id: string;
};

// Type for the State of the reducer
type State = {
  type: string;
  name: string;
  includesGetter: boolean;
  includesSetter: boolean;
};

// Type for the Action in the reducer
type Action = {
  type: string;
  value: string | boolean;
};

// Reducer for the state
const variableReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TYPE':
      return { ...state, type: action.value as string };
    case 'NAME':
      return { ...state, name: action.value as string };
    case 'GETTER':
      return { ...state, includesGetter: !state.includesGetter as boolean };
    case 'SETTER':
      return { ...state, includesSetter: !state.includesSetter as boolean };
    default:
      return initialState;
  }
};

function VariableInput(props: Props) {
  // useReducer hook to manage the state of the variable input field
  const [inputState, dispatchActions] = useReducer(variableReducer, initialState);

  // Dispatch for the redux store
  const dispatch = useDispatch();

  // Handle the text input change
  const handleTextChange = (state: string, action: string) => dispatchActions({ type: action, value: state });

  // Handle the checkbox input change
  const handleCheckboxChange = (state: boolean, action: string) => dispatchActions({ type: action, value: state });

  // Dispatch the updateVariable action when the inputState changes
  useEffect(() => {
    dispatch(classVariablesActions.updateVariable({ ...inputState, id: props.id }));
    return () => {};
  }, [inputState, dispatch, props.id]);

  return (
    <div className={styles['variable-sector']}>
      {/* TextInput field for name and variable type */}
      <div className={styles['variable-sector__input']}>
        <TextInput name='TYPE' label='Type' placeholder='Type' updateMethod={handleTextChange} />
        <TextInput name='NAME' label='Name' placeholder='Name' updateMethod={handleTextChange} />
      </div>

      {/* Checkbox fields to include getter and setter */}
      <div className={styles['variable-sector__checkbox']}>
        <Checkbox name='GETTER' label='Getter?' updateCheckbox={handleCheckboxChange} />
        <Checkbox name='SETTER' label='Setter?' updateCheckbox={handleCheckboxChange} />
      </div>

      {/* Button to remove the variable input field */}
      <div className={styles['variable-sector__delete-btn']}>
        <RemoveInputFieldButton type={'variable'} id={props.id} />
      </div>
    </div>
  );
}

export default VariableInput;
