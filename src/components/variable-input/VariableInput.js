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
  console.log(props.id);
  const [inputState, dispatchActions] = useReducer(variableReducer, initialState);

  const dispatch = useDispatch();

  const handleTextChange = (state, action) => {
    dispatchActions({ type: action, value: state });
    dispatch(classVariablesActions.updateVariable({ values: inputState, id: props.id }));
  };

  const handleCheckboxChange = (state, action) => {
    dispatchActions({ type: action, value: state });
    dispatch(classVariablesActions.updateVariable({ values: inputState, id: props.id }));
  };

  return (
    <div className={styles['variable-sector']}>
      <div className={styles['variable-sector__input']}>
        <TextInput name='TYPE' label='Type' placeholder='Type' updateMethod={handleTextChange} />
      </div>

      <div className={styles['variable-sector__input']}>
        <TextInput name='NAME' label='Name' placeholder='Name' updateMethod={handleTextChange} />
      </div>

      <div className={styles['variable-sector__checkbox']}>
        <Checkbox name='GETTER' label='Getter?' updateCheckbox={handleCheckboxChange} />
      </div>

      <div className={styles['variable-sector__checkbox']}>
        <Checkbox name='SETTER' label='Setter?' updateCheckbox={handleCheckboxChange} />
      </div>

      <RemoveInputFieldButton type={'variable'} id={props.id} />

      {/* <input
          name='TYPE'
          id='TYPE'
          type='text'
          value={state.type}
          onChange={handleTextChange}
          onBlur={handleChange}
        />
        <label htmlFor='TYPE'>Type</label>

        <input
          name='NAME'
          id='NAME'
          type='text'
          value={state.name}
          onChange={handleTextChange}
          onBlur={handleChange}
        />
        <label htmlFor='NAME'>Name</label>
      </div>

      <div className='col-4'>
        <label>
          <input
            name='GETTER'
            type='checkbox'
            checked={state.includesGetter}
            onKeyPress={handleChange}
            onChange={handleChange}
          />{' '}
          getter?
        </label>

        <label className='checkbox-text'>
          <input
            name='SETTER'
            type='checkbox'
            checked={state.includesSetter}
            onKeyPress={handleChange}
            onChange={handleChange}
          />{' '}
          setter?
        </label>
      </div>
      <div className='col-1'>
        <RemoveInputField type={'variable'} id={props.id} />
      </div> */}
    </div>
  );
}

export default VariableInput;
