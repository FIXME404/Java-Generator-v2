import styles from './HeaderInput.module.scss';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { headerActions } from '../../store/header';
import TextInput from '../inputs/TextInput';

function HeaderInput() {
  // Dispatch for the redux store
  const dispatch = useDispatch();

  // Handles the change of the Class Name input field by dispatching the addName action
  const changeNameHandler = (inputText: string) => dispatch(headerActions.addName(inputText));

  // Handles the change of the Class extends input field by dispatching the addDescription action
  const changeExtendsHandler = (inputText: string) => dispatch(headerActions.addExtends(inputText));

  // Handler the change of the Class implements input field by dispatching the addImplements action
  const changeImplementsHandler = (inputText: string) => dispatch(headerActions.addImplements(inputText));

  return (
    <div className={styles['header-sector']}>
      {/* Class Name input field */}
      <div className={styles['header-sector__content']}>
        <TextInput name='CLASSNAME' label='Class Name' placeholder='Class Name' updateMethod={changeNameHandler} />
      </div>

      {/* Class extends input field */}
      <div className={styles['header-sector__content']}>
        <TextInput name='EXTENDS' label='extend' placeholder='extend' updateMethod={changeExtendsHandler} />
      </div>

      {/* Class implements input field */}
      <div className={styles['header-sector__content']}>
        <TextInput name='IMPLEMENTS' label='implements' placeholder='implements' updateMethod={changeImplementsHandler} />
      </div>
    </div>
  );
}

export default memo(HeaderInput);
