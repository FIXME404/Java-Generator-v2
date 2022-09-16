import styles from './VariableInput.module.scss';
import { useEffect, useReducer } from 'react';
import { classVariablesActions } from '../../store/class-variables';
import { useDispatch } from 'react-redux/es/exports';
import RemoveInputFieldButton from '../Buttons/RemoveInputFieldButton';
import TextInput from '../Inputs/TextInput';
import Checkbox from '../Inputs/Checkbox';

const initialState = { type: '', name: '', includesGetter: false, includesSetter: false };

const variableReducer = (state, action) => {
  if (action.type === 'TYPE') {
    return { ...state, type: action.value };
  } else if (action.type === 'NAME') {
    return { ...state, name: action.value };
  } else if (action.type === 'GETTER') {
    return { ...state, includesGetter: !state.includesGetter };
  } else if (action.type === 'SETTER') {
    return { ...state, includesSetter: !state.includesSetter };
  } else {
    return initialState;
  }
};

function VariableInput(props) {
  const [inputState, dispatchActions] = useReducer(variableReducer, initialState);

  const dispatch = useDispatch();

  const handleTextChange = (state, action) => {
    console.log(state, action);
    dispatchActions({ type: action, value: state });
    console.log(inputState, props.id);

    dispatch(classVariablesActions.updateVariable({ id: props.id, ...inputState }));
  };

  const handleCheckboxChange = (state, action) => {
    dispatchActions({ type: action, value: state });
    console.log(inputState, props.id);
    dispatch(classVariablesActions.updateVariable({ id: props.id, ...inputState }));
  };

  return (
    <div className={styles['variable-sector']}>
      <div className={styles['variable-sector__input']}>
        <TextInput name='TYPE' label='Type' placeholder='Type' updateMethod={handleTextChange} />
        <TextInput name='NAME' label='Name' placeholder='Name' updateMethod={handleTextChange} />
      </div>

      <div className={styles['variable-sector__checkbox']}>
        <Checkbox name='GETTER' label='Getter?' updateCheckbox={handleCheckboxChange} />
        <Checkbox name='SETTER' label='Setter?' updateCheckbox={handleCheckboxChange} />
      </div>

      <div className={styles['variable-sector__delete-btn']}>
        <RemoveInputFieldButton type={'variable'} id={props.id} />
      </div>
    </div>
  );
}

export default VariableInput;
