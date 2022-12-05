import React, { useReducer, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styles from './MethodInput.module.scss';
import TextInput from '../inputs/TextInput';
import Checkbox from '../inputs/Checkbox';
import RemoveInputFieldButton from '../buttons/RemoveInputFieldButton';
import { methodsActions } from '../../store/methods';

const initialState = { returns: '', name: '', params: '', isMethodPrivate: false };

// Type for the props
type Props = {
  id: string;
};

// Type for the state of the reducer
type State = {
  returns: string;
  name: string;
  params: string | string[];
  isMethodPrivate: boolean;
};

// Type for the action in the reducer
type Action = {
  type: string;
  value: string | boolean;
};

const methodReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'RETURNS':
      return { ...state, returns: action.value as string };
    case 'NAME':
      return { ...state, name: action.value as string };
    case 'PARAMS':
      return { ...state, params: action.value as string };
    case 'PRIVATE':
      return { ...state, isMethodPrivate: !state.isMethodPrivate as boolean };
    default:
      return initialState;
  }
};

function MethodInput(props: Props) {
  // useReducer hook to manage the state of the method input field
  const [inputState, dispatchActions] = useReducer(methodReducer, initialState);

  // Dispatch for the redux store
  const dispatch = useDispatch();

  // Handle the text input change
  const handleTextChange = (state: string, action: string) => dispatchActions({ type: action, value: state });

  // Handle the checkbox input change
  const handleCheckboxChange = (state: boolean, action: string) => dispatchActions({ type: action, value: state });

  // Dispatch the updateMethod action when the inputState changes
  useEffect(() => {
    dispatch(methodsActions.updateMethod({ ...inputState, id: props.id }));
    return () => {};
  }, [inputState, dispatch, props.id]);

  return (
    <div className={styles['method-sector']}>
      <div className={styles['method-sector__input']}>
        {/* TextInput fields to enter the method's return type, name and parameters */}
        <TextInput name='RETURNS' label='Return Type' placeholder='Return Type' updateMethod={handleTextChange} />
        <TextInput name='NAME' label='Method Name' placeholder='Method Name' updateMethod={handleTextChange} />
        <div className={styles['method-sector__input--params']}>
          <TextInput name='PARAMS' label='Parameters (Comma Separated)' placeholder='Parameters (Comma Separated)' updateMethod={handleTextChange} />
        </div>
      </div>

      {/* Checkbox to set the method as private */}
      <div className={styles['method-sector__checkbox']}>
        <Checkbox name='IS_METHOD_PRIVATE' label='Private?' updateCheckbox={handleCheckboxChange} />
      </div>

      {/* Button to remove the method input field */}
      <div className={styles['method-sector__delete-btn']}>
        <RemoveInputFieldButton type={'method'} id={props.id} />
      </div>
    </div>
  );
}

export default MethodInput;
