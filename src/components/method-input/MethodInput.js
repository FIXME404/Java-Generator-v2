import { useReducer } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styles from './MethodInput.module.scss';
import TextInput from '../Inputs/TextInput';
import Checkbox from '../Inputs/Checkbox';
import RemoveInputFieldButton from '../Buttons/RemoveInputFieldButton';
import { methodsActions } from '../../store/methods';

const initialState = { returns: '', name: '', params: '', isMethodPrivate: false };

const methodReducer = (state, action) => {
  if (action.type === 'RETURNS') {
    return { ...state, type: action.value };
  } else if (action.type === 'NAME') {
    return { ...state, name: action.value };
  } else if (action.type === 'PARAMS') {
    return { ...state, includesGetter: !state.includesGetter };
  } else if (action.type === 'IS_METHOD_PRIVATE') {
    return { ...state, includesSetter: !state.includesSetter };
  } else {
    return initialState;
  }
};

function MethodInput(props) {
  const [inputState, dispatchActions] = useReducer(methodReducer, initialState);

  const dispatch = useDispatch();

  const handleTextChange = (state, action) => dispatchActions({ type: action, value: state });

  const handleCheckboxChange = (state, action) => {
    dispatchActions({ type: action, value: state });
    dispatch(methodsActions.addMethod({ values: inputState, id: props.id }));
  };

  return (
    <div className={styles['method-sector']}>
      <div className={styles['method-sector__input']}>
        <TextInput
          name='RETURNS'
          label='Return Type'
          placeholder='Return Type'
          updateMethod={handleTextChange}
        />

        <TextInput
          name='NAME'
          label='Method Name'
          placeholder='Method Name'
          updateMethod={handleTextChange}
        />

        <div className={styles['method-sector__input--params']}>
          <TextInput
            name='PARAMS'
            label='Parameters'
            placeholder='Parameters'
            updateMethod={handleTextChange}
          />
        </div>
      </div>

      <div className={styles['method-sector__checkbox']}>
        <Checkbox name='IS_METHOD_PRIVATE' label='Private?' updateCheckbox={handleCheckboxChange} />
      </div>

      <div className={styles['method-sector__delete-btn']}>
        <RemoveInputFieldButton type={'method'} id={props.id} />
      </div>
    </div>
    // <div className='row'>
    //     <input
    //       name='RETURNS'
    //       type='text'
    //       placeholder='Return Type'
    //       value={state.returns}
    //       onChange={handleTextChange}
    //       onBlur={handleChange}
    //     />

    //     <input
    //       name='NAME'
    //       type='text'
    //       placeholder="Method's name"
    //       value={state.name}
    //       onChange={handleTextChange}
    //       onBlur={handleChange}
    //     />
    //     <input
    //       name='PARAMS'
    //       type='text'
    //       placeholder='Params (seperated by commas)'
    //       value={state.name}
    //       onChange={handleTextChange}
    //       onBlur={handleChange}
    //     />

    //   <div className='col-4'>
    //     <label>
    //       <input
    //         name='IS_METHOD_PRIVATE'
    //         type='checkbox'
    //         checked={state.isMethodPrivate}
    //         onKeyPress={handleChange}
    //         onChange={handleChange}
    //       />{' '}
    //       Private?
    //     </label>
    //   </div>
    //   <div className='col-1'>
    //     <RemoveInputField type={'method'} id={props.id} />
    //   </div>
    // </div>
  );
}

export default MethodInput;
