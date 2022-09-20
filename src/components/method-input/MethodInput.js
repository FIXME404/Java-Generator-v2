import { useReducer, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styles from './MethodInput.module.scss';
import TextInput from '../inputs/TextInput';
import Checkbox from '../inputs/Checkbox';
import RemoveInputFieldButton from '../Buttons/RemoveInputFieldButton';
import { methodsActions } from '../../store/methods';

const initialState = { returns: '', name: '', params: '', isMethodPrivate: false };

const methodReducer = (state, action) => {
  if (action.type === 'RETURNS') {
    return { ...state, returns: action.value };
  } else if (action.type === 'NAME') {
    return { ...state, name: action.value };
  } else if (action.type === 'PARAMS') {
    return { ...state, params: action.value };
  } else if (action.type === 'IS_METHOD_PRIVATE') {
    return { ...state, isMethodPrivate: !state.includesSetter };
  } else {
    return initialState;
  }
};

function MethodInput(props) {
  console.log('METHOD INPUT RENDERED');
  const [inputState, dispatchActions] = useReducer(methodReducer, initialState);

  const dispatch = useDispatch();

  const handleTextChange = (state, action) => dispatchActions({ type: action, value: state });

  const handleCheckboxChange = (state, action) => dispatchActions({ type: action, value: state });

  useEffect(() => {
    dispatch(methodsActions.updateMethod({ ...inputState, id: props.id }));
    return () => {};
  }, [inputState, dispatch, props.id]);

  return (
    <div className={styles['method-sector']}>
      <div className={styles['method-sector__input']}>
        <TextInput name='RETURNS' label='Return Type' placeholder='Return Type' updateMethod={handleTextChange} />

        <TextInput name='NAME' label='Method Name' placeholder='Method Name' updateMethod={handleTextChange} />

        <div className={styles['method-sector__input--params']}>
          <TextInput name='PARAMS' label='Parameters (Comma Separated)' placeholder='Parameters (Comma Separated)' updateMethod={handleTextChange} />
        </div>
      </div>

      <div className={styles['method-sector__checkbox']}>
        <Checkbox name='IS_METHOD_PRIVATE' label='Private?' updateCheckbox={handleCheckboxChange} />
      </div>

      <div className={styles['method-sector__delete-btn']}>
        <RemoveInputFieldButton type={'method'} id={props.id} />
      </div>
    </div>
  );
}

export default MethodInput;
